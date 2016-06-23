require([
	'underscore',
	'jquery',
	'backbone',
	'_utils',
	'_global'
], function(_, $, Backbone) {
	MP.AppTracking = MP.GATracking.extend({

		initialize: function(){
			MP.GATracking.prototype.initialize.call(this, {
				'itemAdded': 'trackAddToCart',
				'checkoutSuccess': 'trackPurchase',
				'friendsInvited' : 'trackFriendsInvitation',
				'signupSuccess': 'trackSignupSuccess',
				'signupSuccessPage': 'trackSignupSuccess'
			});
		},

		trackAddToCart: function(){
			this.sendAppEvent("milleporte://shopping/cart/add");
		},

		trackPurchase: function(){
			this.sendAppEvent('milleporte://shopping/checkout/success');
		},

		trackFriendsInvitation: function(){
			this.sendAppEvent('milleporte://account/invitefriend');
		},

		trackSignupSuccess: function(){
			this.sendAppEvent('milleporte://account/signup/success');
		}
	});
});
