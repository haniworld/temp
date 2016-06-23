require(['jquery', 'underscore', 'backbone', '_utils'], function($, _, Backbone) {
	MP.BottomGenreMenu = Backbone.View.extend({

		events: {
			'click a.login-required': 'showQuickLogin',
			'click .genre-menu li a': 'switchGenreMenu',
			"click a[data-sale-code]" : "saleBannerClicked"
		},

		render: function() {
			// Show the default genre "WOMEN" at the bottom of the page
			this.showMenuList('women');
			return this;
		},

		// swtich genre menu based on the category selected
		switchGenreMenu: function(event){
			var $li, currentGenre;
			$li = $(event.target).closest('li');
			currentGenre = $li.data('genre');
			this.showMenuList(currentGenre);

			// make sure lazy loaded sale banner images are loaded
			Utils.$window.trigger('resize');
		},

		showMenuList: function(genre, menuClassName) {
			var $all, $selectedCampains;

			// Hide all sales banners once
			$all = this.$(".campaign-list li");
			$all.hide();

			// Show the selected sales banners
			$selectedCampains = this.$(".campaign-list li[data-sale-genres*='genre-" + genre + "']");
			$selectedCampains.css('display', 'inline-block');

			// Select the genre menu
			this.$(".genre-menu li a").removeClass('active');
			this.$(".genre-menu li[data-genre=" + genre + "] a").addClass('active');
		},

		showQuickLogin: function(ev) {
			ev.preventDefault();
			this.clickedSaleLink = this.$(ev.target).closest('a').attr('href');
			MP.dispatcher.trigger('quickLoginOpen', 'signup', 'ClosedSale - BrandPage'); // Note:  Assuming the genre menu login popup happens in brand page where users are logged out
		}
	});

});
