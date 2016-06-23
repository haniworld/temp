require(['jquery', 'underscore', 'backbone', 'components/editorial-slider'], function($, _, Backbone) {
	MP.SaleListPageView = Backbone.View.extend({

		events: {
			"click a[data-sale-code]" : "saleBannerClicked"
		},

		initialize: function() {
			MP.dispatcher.on('loginSuccess', this.gotoSaleLink, this);
			MP.dispatcher.on('signupSuccess', this.gotoSaleLink, this);

			// we do this way to call so that sale impression tracking can be decoupled
			// by just not extending the tracker object
			this.listenTo(this, 'saleBannerClicked', this.trackSaleBannerClick);
		},

		render: function() {
			 // For the Sale Page
			var $editorialSalelistSlider = this.$('.editorial-slider');
			if($editorialSalelistSlider.length > 0) {
				var slideCount = $editorialSalelistSlider.find('.editorial-slide').length;
				if(slideCount <= 1) {
				  $editorialSalelistSlider.addClass('is-single-slide');
				  // don't slick if single page slide
				}
				else {
					$editorialSalelistSlider.slick({
					  arrows: true,
					  autoplay: true,
					  centerMode: (slideCount > 1),
					  centerPadding: '10px',
					  focusOnSelect: true,
					  slidesToShow: (slideCount > 3) ? 3 : 1,
					  variableWidth: true,
					  responsive: [
					  {
					    breakpoint: 600,
					    settings: {
					      autoplay: true,
					      autoplaySpeed: 4000,
					      centerMode: false,
					      centerPadding: '0px',
					      focusOnSelect: false,
					      slidesToShow: 1,
					      variableWidth: false
					    }
					  }]
					});

					MP.Components.addCustomerEditorialSliderBehavior($editorialSalelistSlider);
				}
			}

			// show the modal login as an in-page form
			if(!Utils.$body.hasClass('logged-in')) {
				var $quickLogin = this.$('#quicklogin')
				$quickLogin.removeClass('modal');
				$quickLogin.find('[name=formTrigger]').val('SaleListInPage');
				// When the form is hidden, the modal form becmoes the inpage form again, so reset the form trigger
				$quickLogin.one('hidden', function(){
					$quickLogin.find('[name=formTrigger]').val('SaleListInPage');
				});
			}
			return this;
		},

		showQuickLogin: function(ev) {
			ev.preventDefault();
			this.clickedSaleLink = this.$(ev.target).closest('a').attr('href');
			MP.dispatcher.trigger('quickLoginOpen', 'signup', 'ClosedSale - SaleList');
		},

		gotoSaleLink: function(opts) {
			if(typeof(this.clickedSaleLink) == 'undefined' ){
				this.clickedSaleLink = $(location).attr('href');
			}
			window.location = this.clickedSaleLink + "?token=" + opts.token;
		}
	});
});
