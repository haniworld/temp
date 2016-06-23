require([
	'underscore',
	'jquery',
	'backbone',
	'templates',
	'pages/returns/return-post-request'
	], function(_, $, Backbone, Templates) {

	MP.ReturnItemView = Backbone.View.extend({
		REASON_OTHER_VALUE: 'other',
		events: {
			'change input.select-item': 'checkboxChanged',
			'click .return-details-ok': 'finalizeSelection',
			'click .return-details-cancel': 'undoSelection',
			'click .return-reason': 'toggleCSForm',
			'click .unreturnable-item-submit': 'submitCSForm',
			'click .unreturnable-item-cancel': 'undoSelection'
		},

		tagName: 'li',
		className: function(){
			return 'return-item ' + (this.model.get('returnable') ? "" : "unreturnable");
		},

		initialize: function(){
			this.selected = false;
			this.itemId = this.model.get('order-item-id');
			this.paymentType = this.model.get('pay-type').toLowerCase();

			// build the new array of obj for pledges
			this.pledges = _.map(MP.ReturnPledges, function(pledge){
				return _.extend(pledge, {'checked': ''});
			});
			this.reasons = _.map(MP.ReturnReasons, function(reason){
				return _.extend(reason, {'checked': ''});
			});

			this.listenTo(this.model, 'remove', this.transitionOut);
			this.listenTo(this.model, 'change:qty', this.render);
			this.listenTo(this, 'dataChanged', this.render, this);
		},

		render: function(){
			var qtyOpts = [];
			for(var i = 1; i < this.model.get('qty') + 1; i++){
				qtyOpts.push(i);
			}
			this.$el.html(Templates['returnable-item.hbs'](_.extend(this.model.attributes, {
				qtyOpts: qtyOpts,
				id: this.itemId,
				reasons: this.reasons,
				pledges: this.pledges
			})));

			this.$itemDetail = this.$('.return-item-detail-wrapper');
			this.$returnQty = this.$('select.return-item-quantity');
			this.$btnOK = this.$('.return-details-ok');

			return this;
		},

		checkboxChanged: function(){
			if(this.$('input.select-item:checked').length > 0){
				this.selectItem();
			}
			else {
				this.undoSelection();
			}
		},

		selectItem: function(){
			// don't respond if this item is selected in finalized mode
			if(!this.selected){
				// Select the product li
				if(!this.$itemDetail.hasClass("open")){
					this.toggleItemDetail(true);
				}
			}
		},

		finalizeSelection: function(){
			// remove the previous validation errors if any
			this.$el.removeClass('validation-errors');
			this.$('.error').removeClass('error');
			this.$('[title]').tooltip('destroy');
			var $label;
			if(!this.validateForm()){
				if(this.$('.return-detail-quantity .form-dropdown').hasClass('error')){
					$label = this.$('.return-detail-quantity h4');
					$label.addClass('error');
				}
				if(this.$('.return-reason-group').hasClass('error')){
					$label = this.$('.return-detail-reasons h4');
					$label.addClass('error');
				}
				if(this.$('.return-pledge-group').find('.error').length > 0){
					$label = this.$('.return-detail-pledges h4');
					$label.addClass('error');
					$label.tooltip({placement: 'right'});
					$label.tooltip('show');
				}
				// Adjust the screen position to show the errors
				Utils.scrollBodyTo(this.$el.offset().top);
			}
			else {
				// Select this item for return
				this.toggleSelected(true);

				this.toggleItemDetail(false, _.bind(function(){
					this.trigger('dataChanged');
					MP.dispatcher.trigger('returnItemSelected'); // after the item detail pane is closed refresh
					// Adjust the screen position
					// Only scroll repositioning on mobile device
					Utils.scrollBodyTo(this.$el.offset().top);
				}, this));
			}
		},

		toggleItemDetail: function(open, callback){
			MP.dispatcher.trigger('returnOverlay', open);
			open ? this.$itemDetail.slideDown(400, callback) : this.$itemDetail.slideUp(400, callback);
			this.$el.toggleClass("open", open);
		},

		undoSelection: function(noScroll){
			this.cleanOptions();
			this.toggleCSForm();
			this.toggleSelected(false);

			this.toggleItemDetail(false, _.bind(function(){
				this.trigger('dataChanged');
				MP.dispatcher.trigger('returnItemDeselected');
			}, this));
			//Adjust the screen position
			// Only scroll repositioning on mobile device
			if(typeof(noScroll) === 'undefined' || noScroll === false){
				Utils.scrollBodyTo(this.$el.offset().top);
			}
		},

		cleanOptions: function(){
			this.$('input:radio').attr('checked', false);
			this.$('input:checkbox').removeAttr('checked');
			this.$('textarea').val('');
			// remove all error messages if any
			this.$el.removeClass('validation-errors');
			this.$('.error').removeClass('error');
		},

		// set all the necessary properties
		toggleSelected: function(selected){
			this.selected = selected;
			// set pledges
			this.$('[id^="' + this.itemId + '-pledge-"]').each(_.bind(function(index, checkbox){
				var $checkbox = this.$(checkbox);
				this.pledges[index]['checked'] =  $checkbox.attr('checked');
			}, this));
			_.each(this.reasons, function(reason){
				reason.checked = this.$('input.return-reason[value=' + reason.value + ']').attr('checked');
			}, this);
			this.model.set('isSelected', selected);
			// set model values - don't do this before you can update the pledges and reasons because this triggers render method
			this.model.set('returnReasonText', this.getReturnReasonText());
			this.model.set('selectedReturnReason', this.getReturnReason());
			this.model.set('selectedQty', this.$returnQty.val());

			this.$el.toggleClass("return-selected", selected);
		},

		// show the CS form and hide pledges and actions if the 'other' option is checked
		toggleCSForm: function(){
			var otherChecked =  (this.getReturnReason() === this.REASON_OTHER_VALUE);
			this.$('.return-cs-form').toggle(otherChecked);
			this.$('.return-detail-pledges').toggle(!otherChecked);
			this.$('.return-detail-actions').toggle(!otherChecked);
		},

		submitCSForm: function(){
			this.$form = this.$('#form-returns-cs-' + this.itemId);
			this.$error = this.$form.find('.error-messages');
			if(this.validateForm()){
				// copy the item quantity to the form
				var qty = this.$returnQty.val();
				this.model.set('selectedQty', qty);
				this.$form.find('#return-item-quantity-' + this.itemId).val(qty);

				// return reason is always 'other' for CS request for now
				this.model.set('selectedReturnReason', this.REASON_OTHER_VALUE);
				this.model.set('returnReasonDesc', this.$('[name=unreturnalbe-item-description]').val());
				var returnItems  = this.getItemsToReturn();
				this.submit(
					{"items": returnItems},
					_.bind(function(data){
						this.undoSelection(true); // close the detail pane and clean up the div

						var remainingQty =  (this.model.get('qty') - returnItems.length);
						// if the return quantity is less than the original item quantity, just cancel and update the model qty
						var removeDiv = (remainingQty <= 0);
						if(!removeDiv){
							// update the remaining items
							this.model.set('qty',remainingQty);
							this.removeItemsReturned(returnItems);
						}

						// Determine if this model needs to be removed from the collection and show the
						MP.dispatcher.trigger('csRequestSubmissionSuccess', data['request-id'], removeDiv, this.model);
					}, this),
					_.bind(function(data){
						this.undoSelection();
						MP.dispatcher.trigger('returnsSubmissionsError', data.errors.join("\n"));
					}, this)
				);
			}
		},

		transitionOut: function(){
			this.remove();
		},

		getReturnReason: function(){
			return this.$("[name=return-reason-" + this.itemId + "]:checked").val();
		},

		getReturnReasonText: function(){
			var reason = _.find(this.reasons, function(reason){ return reason.checked == 'checked' });
			return reason ? reason.label : "";
		},

		isSelected: function(){
			return this.selected;
		},

		getPaymentType: function(){
			return this.paymentType;
		},

		// return an array of item hash
		getItemsToReturn: function(){
			var items = [];
			var qty = parseInt(this.model.get('selectedQty')) || 0;
			for(var i = 0; i < qty; i++){
				var item = {};
				item['orderItemPieceId'] = this.model.get('ids')[i];
				var reason = this.model.get('selectedReturnReason');
				item['reason'] = reason;
				item['reasonDescription'] = this.model.get('returnReasonDesc');
				items.push(item);
			}
			return items;
		},

		// itemsReturned is the return value of getItemsToReturn() methood
		removeItemsReturned: function(itemsReturned){
			var idsReturned = _.pluck(itemsReturned, 'orderItemPieceId');
			this.model.set('ids', _.difference(this.model.get('ids'), idsReturned));
		}
	});

	_.extend(MP.ReturnItemView.prototype, MP.FieldValidation, MP.ReturnPostRequest);
});



