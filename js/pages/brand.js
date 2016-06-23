require(['jquery', 'underscore', 'backbone', '_utils'], function($, _, Backbone) {
	MP.BrandPageView = Backbone.View.extend({

		events: {
			'click .product-list--hasSeeMore .more-products': 'showAllImages',
			'click .genre-menu li a': 'switchGenreMenu'
		},

		initialize: function() {
			new MP.ShopDirectory();
			Backbone.history.start();
			MP.dispatcher.on('loginSuccess', this.gotoSaleLink, this);
			MP.dispatcher.on('signupSuccess', this.gotoSaleLink, this);
		},

		render: function() {
			// show the modal login as an in-page form
			if(!Utils.$body.hasClass('logged-in')) {
				var $quickLogin = this.$('#quicklogin')
				$quickLogin.removeClass('modal');
				$quickLogin.find('[name=formTrigger]').val('BrandInPage');
				// When the form is hidden, the modal form becmoes the inpage form again, so reset the form trigger
				$quickLogin.one('hidden', function(){
					$quickLogin.find('[name=formTrigger]').val('BrandInPage');
				});
			}
			// Don't show the "More" link if there's no more product images to show
			if (this.$('#product-list .lazy-loading').length <= 0) {
				this.$('.more-products').hide();
			}
			// init genre menu at the bottom
			new MP.BottomGenreMenu({el: '#current-sales'}).render();
			return this;
		},

		showAllImages: function(){
			// Handle lazy loading here of the Brand product list
			this.$('#product-list .lazy-loading').css('display', 'inline-block');
			this.$('.product-list--hasSeeMore .more-products').hide();
		},

		gotoSaleLink: function(opts) {
			if(typeof(this.clickedSaleLink) == 'undefined' ){
				this.clickedSaleLink = $(location).attr('href');
			}
			window.location = this.clickedSaleLink + "?token=" + opts.token;
		}
	});

});
