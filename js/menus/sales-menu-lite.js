require(['jquery', 'underscore', 'backbone', 'templates', 'slick'], function($, _, Backbone, Templates) {

		MP.SalesMenuLiteView = Backbone.View.extend({

		initialize: function(opts) {
			this.currentCategory  = (opts && opts.category) ? opts.category : null;
			this.currentSaleId = (opts && opts.saleId) ? opts.saleId : null;
		},

		render: function() {
			var sales = this.collection.map(function(sale){
				if(sale.get('code') == this.currentSaleId) {
					sale.set('current', 'current');
				}
				else {
					sale.set('current', '');
				}
				return Templates['sales-menu-lite.hbs'](sale.attributes);
			}, this);

			this.$el.html(sales);
			this.initSlider();
			return this;
		},

		initSlider: function() {
			// make it slidable
			this.$el.slick({
				arrows: false,
				centerMode: true,
				centerPadding: '100px',
				infinite: false,
				slidesToShow: 3,
				variableWidth: true,
				swipeToSlide: true
			});

			// Center the current sale slide
			var currentIndex = 0;

			// get the index of the current slae slide
			var $currentSlide = this.$el.find('li[data-sale-code=' + this.currentSaleId + ']');

			if($currentSlide.length > 0) {
				currentIndex = $currentSlide.first().attr('data-slick-index');
			}
				this.$el.slick('slickGoTo', currentIndex, false);

				// enable slide up/down behavior
				this.$el.on('swipe', function(evt, slick, direction){

				if (direction == 'up') {
				  // show category nav and hide the sales nav

				} else if(direction == 'down'){
				}
			// ignore if it's swipe left or right
			});
		}
	});
});