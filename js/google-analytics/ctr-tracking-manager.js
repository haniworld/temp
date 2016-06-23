require([
		'underscore',
		'jquery',
		'backbone',
		'google-analytics/ga-tracking',
		'google-analytics/sale-banner-tracking'
	], function(_, $, Backbone) {

		MP.CtrTrackingManager = MP.GATracking.extend({

			MAX_PROD_IMPS: 30,
			MAX_PROMO_IMPS: 60,

			initialize: function(){
				MP.GATracking.prototype.initialize.call(this, {
					'productImpression': 'addProductImpression',
					'productClick': 'sendProductClick',
					'saleImpression': 'addPromoImpression',
					'saleClick': 'sendPromoClick',
					'pageUnload': 'sendImpressions'
				});
				var obj = this;

				this.gaProducts = [];
				this.gaPromos = [];
			},

			render: function(){
				var obj = this;
				// Tacking the same banner impressions as image loaded events need to be registered before the page is rendered
				this.$('img.sale-img').one('imageLoaded', function(){
					obj.addSaleImpressions($(this));
				});
			},

			sendImpressions: function(){
				this.sendProductImpressions();
				this.sendPromoImpressions();
			},

			addProductImpression: function(gaProduct){
				if(this.gaProducts.length > this.MAX_PROD_IMPS){
					this.sendProductImpressions();
				}
				this.gaProducts.push(gaProduct);
			},

			sendProductImpressions: function(){
				if(this.gaProducts.length > 0){
					this.trackEcommerce(
						'productImpression',
						 {
							'currencyCode': 'JPY',
							'impressions': this.gaProducts
						}
					);
					this.gaProducts = [];
				}
			},

			sendProductClick: function(listName, gaProduct, eventCallback){
				// product click
				var dataObj = {
					'click': {
						'actionField': {'list': listName},
						'products': [gaProduct]
					}
				};
				// you can send product impressions along with an action
				if(this.gaProducts.length > 0){
					dataObj['impressions'] = this.gaProducts;
					this.gaProducts = [];
				}

				this.trackEcommerce('productClick', dataObj, eventCallback);
			},

			addPromoImpression: function(gaPromo){
				if(this.gaPromos.length > this.MAX_PROMO_IMPS){
					this.sendPromoImpressions();
				}
				this.gaPromos.push(gaPromo);
			},

			sendPromoImpressions: function(){
				if(this.gaPromos.length > 0){
					this.trackEcommerce(
						'promoImpressions',
						{
							'promoView': {
								'promotions': this.gaPromos
							}
						}
					);
				}
				this.gaPromos = []; // reset just in case
			},

			sendPromoClick: function(gaPromo, eventCallback){
				// if(typeof(_gaq) !== 'undefined'){
				//	_gaq.push(['_trackEvent','Campaign Inbound Links', saleCode, container ]);
				// }
				this.trackEcommerce(
					'promoClick',
					{
						'promoClick': {
							'promotions': [gaPromo]
						}
					},
					eventCallback
				);
			}

		});

		_.extend(MP.CtrTrackingManager.prototype, MP.SaleBannerTracking);
});