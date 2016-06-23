//return-request-history.js

require([
	'underscore',
	'jquery',
	'backbone',
	'templates',
	'pages/returns/return-request-item',
	'pages/returns/return-cancel-dialog',
	'models/return-request',
	'components/pagination'
	], function(_, $, Backbone, Templates) {

	MP.AccountReturnHistoryView = Backbone.View.extend({
		MAX_ITEMS: 10,

		initialize: function(){
			MP.dispatcher.on('shippingLabelOpen', this.openReturnLabelWindow, this);
			MP.dispatcher.on('goToPage', this.render, this);
			this.returnCancelDiaglogView = new MP.ReturnCancelDialog({el: '.modal-cancel-request'});
			this.paginationView = new MP.Components.PaginationView({
				el: '.page-navigation',
				num: this.MAX_ITEMS,
				resetScrollPointId: 'return-request-list'
			});
			this.views = [];
		},

		render: function(opts){
			// clean all the views at once
			if(this.views.length > 0){
				_.each(this.views, function(view){
					view.remove();
				});
			}
			this.collection = this.collection || new MP.ReturnRequests();
			this.collection.fetch({
				data: {
					page: opts.page,
					num: this.MAX_ITEMS
				},
				success: _.bind(function(items, response){
					var total = response.total;
					if(items.length > 0){
						// get the cancel dialog ready
						this.returnCancelDiaglogView.render();

						// render request items
						this.$('#return-requests ul').html(items.map(function(item){
							var itemView = new MP.ReturnRequestItemView({model: item}).render();
							this.views.push(itemView);
							return itemView.el;
						}, this));

						// render pagination
						this.paginationView.render({count: total, page: opts.page});
					}
					else {
						this.$('#return-requests ul').html(Templates['return-no-request.hbs']());
					}
				}, this),
				error: function(){
					this.$('#return-requests ul').html(Templates['return-server-error.hbs']());
				}
			}).always(_.bind(function(){
				this.$('.item-loading').addClass('hidden');
				this.$('.item-loaded').removeClass('hidden');
			}, this));
			return this;
		}
	});

	_.extend(MP.AccountReturnHistoryView.prototype, MP.ReturnLabel);

});
