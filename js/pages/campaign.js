require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	MP.CampaignPageView = Backbone.View.extend({

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

			return this;
		},

		showQuickLogin: function(ev) {
			ev.preventDefault();
			this.clickedSaleLink = this.$(ev.target).closest('a').attr('href');
			MP.dispatcher.trigger('quickLoginOpen', 'signup', 'ClosedSale - Campaign Page');
		},

		gotoSaleLink: function(opts) {
			if(typeof(this.clickedSaleLink) == 'undefined' ){
				this.clickedSaleLink = $(location).attr('href');
			}
			window.location = this.clickedSaleLink + "?token=" + opts.token;
		}
	});
});
