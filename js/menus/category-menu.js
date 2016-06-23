require(['jquery', 'underscore', 'backbone', 'slick'], function($, _, Backbone) {

	MP.CategoryMenu = Backbone.View.extend({

		render: function() {
			this.initSlider();
			return this;
		},

		initSlider: function() {
			this.$el.slick({
				arrows: false,
				centerMode: true,
				centerPadding: '100px',
				variableWidth: true,
				swipeToSlide: true
			});

			// Center the current sale slide
			var currentIndex = 0;

			// get the index of the current slae slide
			var $currentSlide = this.$el.find('li.current');
			if($currentSlide.length > 0) {
				currentIndex = $currentSlide.first().attr('data-slick-index');
			}
			this.$el.slick('slickGoTo', currentIndex, false);
		}
	});
});