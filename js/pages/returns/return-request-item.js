require([
	'underscore',
	'jquery',
	'backbone',
	'templates',
	'pages/returns/return-post-request'
	], function(_, $, Backbone, Templates) {

	MP.ReturnRequestItemView = Backbone.View.extend({
		tagName: 'li',
		className: 'return-request-item',

		events: {
			"click .shipping-label": "openShippingLabel",
			"click .action-cancel": "cancelReturn",
			"click .header-request:not(.status-active)": 'toggleDetail'
		},

		initialize: function(){
			this.listenTo(this.model, 'change', this.render);
			this.requestId = this.model.get('request-id');
		},

		render: function(){
			// TODO: Classify all the possible request status
			var statusClass, isClosed, isReasonOther, status = this.model.get('status');
			if(_.contains(['requested', 'received', 'inspected', 'reimburse_failed', 'reimburse_pending'], status)){
				statusClass = 'active';
				isClosed = false;
			}
			else {
				statusClass = 'closed';
				isClosed = true;
			}
			// assuming only one item can be filed at a time with the reason 'other'
			isReasonOther = this.model.get('items')[0].reason === 'other';
			this.$el.html(Templates['return-request-item.hbs'](
					_.extend(this.model.attributes, {activeStatusClass: statusClass, isClosed: isClosed, isReasonOther: isReasonOther})
				)
			);
			this.$itemDetail = this.$('.request-item-detail');
			return this;
		},

		toggleDetail: function(){
			if(this.$itemDetail.is(':visible')){
				this.$itemDetail.slideUp();
			}
			else{
				this.$itemDetail.slideDown();
			}
		},

		openShippingLabel: function(evt){
			evt.preventDefault();
			MP.dispatcher.trigger('shippingLabelOpen', this.$(evt.target).attr('href'));
		},

		cancelReturn: function(){
			MP.dispatcher.once('returnCancelConfirmed', function(answer){
				if(answer){
					this.$form = this.$('.form-cancel-request');
					this.$submitButton = this.$('.action-cancel');
					this.$error = this.$('error'); // TODO how do you want to display the error??
					this.submit(
						{ "orderReturnRequestId" : this.requestId },
						_.bind(function(data){
							// on success:
							var data = {}; data.status = 'cancelled';
							data['status-name'] = 'キャンセル';
							data.cancelable = false;

							this.model.set('status-name',data['status-name']);
							this.model.set('cancelable', data.cancelable);
							this.model.set('status',data.status);
						}, this),
						_.bind(function(data){
							MP.dispatcher.trigger('showGrowlMessage', data.errors.join("\n"));
						})
					);
				}
			}, this);
			MP.dispatcher.trigger('returnCancelDialogOpen');
		}
	});

	_.extend(MP.ReturnRequestItemView.prototype, MP.ReturnPostRequest);

});



