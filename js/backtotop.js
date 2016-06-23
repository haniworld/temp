// BackToTop component

require(['jquery', 'underscore', 'backbone', '_utils'], function($, _, Backbone) {
	MP.BackToTop = Backbone.View.extend({
		events: {
			'click': 'handleClick'
		},

		initialize: function(){
			this.isHidden = true;
			this.$el.hide();
			$(window).on('scroll', _.debounce(_.bind(this.callback, this), 100));
			this.callback();
		},

		handleClick: function(evt){
			evt.preventDefault();
			Utils.$body.animate({
				'scrollTop': 0
			}, 600);
		},

		callback: function() {
			if (Utils.$body.scrollTop() > 300) {
				if (this.isHidden) {
					this.isHidden = false;
					this.$el.stop(true, true).show().css({
						opacity: 0
					}).animate({
						opacity: 1
					}, 100);
				}
			} else if (!this.isHidden) {
				this.isHidden = true;
				this.$el.stop(true, true).fadeOut(300);
			}
		}
	});
});


