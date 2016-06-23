require([
	'jquery',
	'underscore',
	'backbone',
	'slick',
	'menus/category-menu',
	'menus/category-submenu',
	'google-analytics/sale-banner-tracking'
], function($, _, Backbone) {

	MP.CategoryNavigation = Backbone.View.extend({

		events: {
			"click a[data-sale-code]": 'saleBannerClicked'
		},

		initialize: function(saleId){
			this.saleId = saleId;
			this.categories = this.$('.category-nav li:not(.ga-none)').map(_.bind(function(index, listTag){
				return this.$(listTag).data('category');
			}, this));

			// we do this way to call the addSaleImpressions indirectly so that the sale impression tracking can be decoupled
			// by just not extending the tracking object
			this.listenTo(this, 'saleBannerVisible', this.addSaleImpressions);
		},

		render: function() {
			// render all sub category menu
			var numOfCategories = this.categories.length;
			_.each(this.categories, _.bind(function(category, index) {
				MP.CurrentSales[category].fetch({
					success: _.bind(function(sales, response, options){
						if ( !Utils.MediaQuery.isMobile() ) {

							new MP.SalesMenuView({el: $('.category-submenu-' + category), collection: sales, saleId: this.saleId}).render();
							this.initCategoryNavigation(category);
						}
						else {
							this.initCategoryNavigation();
						}
					}, this)
				}).done(function(){
					MP.dispatcher.trigger('salesResponseReady', category);
				});
			}, this));

			this.resizeId = null;
			Utils.$window.on('resize', _.bind(function(){
				clearTimeout(this.resizeId);
				this.resizeId = setTimeout(_.bind(this.initCategoryNavigation, this), 500);
			}, this));
		},

		initCategoryNavigation: function(category) {
			var $categoryMenu = this.$('.category-nav');
			var $categorySubMenu = category ? this.$('.category-submenu-' + category) : this.$('.category-submenu');

			if(Utils.MediaQuery.isMobile()){
			// Don't show the category sub menu, just make the category nav scrollable
				$categorySubMenu.hide();
				new MP.CategoryMenu({el: $categoryMenu}).render();
				this.categorySlicked = true;
			}
			// for Desktop size
			else { // render the category submenu
				if(this.categorySlicked === true){
					$categoryMenu.slick('unslick');
				}

				var $shopMenuCategories = this.$('.category-nav .sale-category');
				// add click event listener for the tablet touch screen like iPad
				if(Utils.MediaQuery.isTouchScreen()) {
					var $overlay = $('.overlay'),
						$header = $('header#header');
					this.$('.category-nav .sale-category a.category-name').on('click', function(ev){
						$categoryItem = $(this).parent();

						if($categoryItem.hasClass('open')) {
							// if you click the opened category menu again, the sale list page will open
							return true;
						}
						else {
							ev.stopPropagation();
							ev.preventDefault();
							$shopMenuCategories.removeClass('open');
							$(this).parent().addClass('open'); // add the class to the <li> tag

							// over ride the z-index so that the header and the nav menu would show above the overlay
							$header.css('z-index', '2526');
							$overlay.show();
						}
					});
					// Wheb the open menu is clicked once again, redirect to the sale list page
					$overlay.on('click', function(){
						$shopMenuCategories.removeClass('open');
						$overlay.hide();
						$header.css('z-index', 'auto');
					});
				}
				// For non-touch desktop site
				else {
					var menuHoverTimeoutId = undefined;
					var $categoryLinks = $('#shop-menu .category-nav .sale-category a.category-name');
					var obj = this;
					$categoryLinks.on('mouseenter', function(){
						$categoryItem = $(this).parent();

						$categoryItem.one('mouseleave', function(){
							clearTimeout(menuHoverTimeoutId);
							$categoryItem.removeClass('open');
						});

						menuHoverTimeoutId = setTimeout(function(){
							// if the link hovered is NOT already open, show the category menu
							if(!$categoryItem.hasClass('open')) {
								$categoryItem.addClass('open');
								obj.trigger('saleBannerVisible', $categoryItem.find('.slick-active img.sale-banner'));
							}
						}, 700);
					});
				}
			}
		}
	});
});