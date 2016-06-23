require(['jquery', 'underscore', 'backbone','menus/sales-menu-lite'], function($, _, Backbone) {
	MP.SaleDetailPageView = Backbone.View.extend({

		initialize: function(){
			// if( $('body.page-saledetail .product-filters').length > 0 ) {
			// 	new MP.SaleDetailTracking();
			// }
			new MP.ShopDirectory();
			Backbone.history.start();
			this.currentCategory = this.$('#category').val();

			// Sales data finished loading for the specific category
			MP.dispatcher.on('salesResponseReady', this.renderSaleMenu, this);
		},

		render: function(){
			var $saleCode = this.$('#sale-code');
			this.saleId = ($saleCode.length > 0) ? $saleCode.val() : null;

			// prepare the back level button with hash scroll point
			var $backLink = this.$('.show-sales-link a');
			var referrerPath = Utils.getReferrerPathname();
			var backLink = "";
			// either the referrerPath is empty or not sale list page
			if( _.isEmpty(referrerPath) || !(/\/sale\/((all)|(women)|(men)|(lifestyle)|(gourmet))/.test(referrerPath))){
				backLink = $backLink.attr('href')
			}
			else{
				backLink = referrerPath.startsWith('/') ? referrerPath : ("/" + referrerPath);
			}
			$backLink.attr('href', backLink + "#sale-" + this.saleId);
			return this;
		},

		initSaleMenu: function(category){
			var $salesMenu = this.$('#sales-nav');
			if(Utils.MediaQuery.isMobile()){
			new MP.SalesMenuLiteView({el: $salesMenu, collection: MP.CurrentSales[category], saleId: this.saleId}).render();
				MP.dispatcher.trigger('salesMenuRendered', category);
			}
		},

		renderSaleMenu: function(category) {
			// but you need to compare it to the currently enabled category sales
			if(category == this.currentCategory) {
				this.initSaleMenu(category);
			}
		}
	});
});
