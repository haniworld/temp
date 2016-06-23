require(['jquery', 'underscore', 'backbone', 'templates', 'google-analytics/product-tracking'], function($, _, Backbone, Templates) {

	MP.ProductsMenuView = Backbone.View.extend({

		events: {
			'imageLoaded img.prod-img': "prodImageLoaded",
			'click a.prod-nav-item' : 'prodClicked'
		},

		initialize: function(opts) {
			this.currentSaleId = (opts && opts.saleId) ? opts.saleId : null;
			this.currentProductId = (opts && opts.productId) ? opts.productId : null;
			this.saleCode = opts.saleCode;
			this.productGenres = opts.productGenres;
		},

		render: function() {
			this.availableProducts = this.collection.filter(function(prod){
				return prod.get('status') != 'soldout';
			});
			var products = _.map(this.availableProducts, function(prod, index){
				prod.set('current', (prod.get('id') == this.currentProductId ? 'current' : ''));
				prod.set('pos', index + 1);
				return Templates['products-menu.hbs'](prod.attributes);
			}, this);

			this.$el.html(products);

			// enable sliding
			this.$el.slick({
				centerMode: true,
				centerPadding: '0',
				arrows: false,
				slidesToShow: (this.availableProducts.length < 5) ? 3 : 5,
				swipeToSlide: true,
				infinite: false,
				lazyLoad: 'ondemand'
			});

			// Center the current sale slide
			var currentIndex = 0;

			// get the index of the current sale slide
			var $currentSlide = this.$el.find('li[data-prod-id=' + this.currentProductId + ']');
			if($currentSlide.length > 0) {
				currentIndex = $currentSlide.first().attr('data-slick-index');
			}
			this.$el.slick('slickGoTo', currentIndex, false);

			MP.dispatcher.trigger('productsNavRendered');
			return this;
		}
	});

});