require(['jquery', 'underscore', 'backbone', 'templates', 'slick', 'google-analytics/sale-banner-tracking'],
	function($, _, Backbone, Templates) {

	MP.SalesMenuView = Backbone.View.extend({
		SALES_PER_SLIDE: 12,

		initialize: function(opts) {
			this.currentCategory  = (opts && opts.category) ? opts.category : null;
			this.currentSaleId = (opts && opts.saleId) ? opts.saleId : null;

			// we do this way to call so that sale impression tracking can be decoupled
			// by just not extending the tracker object
			this.listenTo(this, 'saleBannerVisible', this.addSaleImpressions);
		},

		render: function() {
			var sales = this.collection.map(function(sale){
				sale.set('current', (sale.get('code') == this.currentSaleId) ? 'current' : '');
				// User the smaller image 160 instead of 320
				sale.set('image', sale.get('image').replace('_320', '_160'));
				return sale.attributes;
			}, this);
			// Divide the sales slides to set of 12
			// (SalesSlides contains multiple saleSlide and the each saleSlide contains 12 sales)
			var salesSlides = _.groupBy(sales, _.bind(function(sale, index){
				return Math.floor(index / this.SALES_PER_SLIDE);
			}, this));
			salesSlides = _.toArray(salesSlides);

			this.$el.html(Templates['category-submenu-slider.hbs']({salesSlides: salesSlides}));

			this.initSlider();
			return this;
		},

		initSlider: function() {
			this.$el.slick({
				dots: true,
				appendArrows: this.$el.find('.submenu-nav-container .submenu-nav'),
				slide: '.category-submenu-slide',
				lazyload: 'ondemand'
			});

			// track menu sale images impression
			this.$el.on('afterChange', _.bind(function(){
				this.trigger('saleBannerVisible', this.$el.find('.slick-active img.sale-banner'));
			}, this));
		}

	});

});