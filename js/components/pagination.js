// pagination.js

require(['jquery', 'underscore', 'backbone', 'templates', '_global'], function($, _, Backbone, Templates) {
	// Accepts items as collection
	MP.Components.PaginationView = Backbone.View.extend({
		events: {
			'click #paging-prev:not(:disabled)': "prevClicked",
			'click #paging-next:not(:disabled)': "nextClicked",
			'click .paging': "pageClicked"
		},

		initialize: function(opts){
			this.numPerPage = opts.num;
			this.resetScrollPointId = opts.resetScrollPointId;
			this.prevEnabled = false;
			this.nextEnabled = true;
		},

		// accepts count and page in opts
		render: function(opts){
			this.totalItemCount = opts.count;
			this.numOfPages = Math.floor(this.totalItemCount / this.numPerPage) + 1;
			if(this.numOfPages > 1){
				this.currentPage = opts.page;
				this.pages = [];
				for(var n = 1; n <= this.numOfPages; n++){
					this.pages.push({
						num: n,
						isCurrent: (n == this.currentPage)
					});
				};
				this.$el.html(Templates['pagination.hbs']({
					pages: this.pages,
					resetScrollPointId: this.resetScrollPointId,
					prevEnabled: this.currentPage != 1,
					nextEnabled: this.currentPage != this.numOfPages
				}));
			}
			return this;
		},

		pageClicked: function(evt){
			var page = this.$(evt.target).data('page');
			MP.dispatcher.trigger('goToPage', {page: page});
		},

		prevClicked: function(){
			var page = this.currentPage -1;
			MP.dispatcher.trigger('goToPage', {page: page});
		},

		nextClicked: function(){
			var page = this.currentPage + 1;
			MP.dispatcher.trigger('goToPage', {page: page});
		}

	});
});
