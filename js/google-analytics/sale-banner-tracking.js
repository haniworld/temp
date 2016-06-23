require(['underscore', 'jquery', 'backbone'], function(_, $, Backbone) {

	MP.SaleBannerTracking = {

		addSaleImpressions: function($elems){
			$elems.each(_.bind(function(index, elem){
				var $a = $(elem).closest('a');
				MP.dispatcher.trigger('saleImpression', this.getGASalePromotion($a));
			}, this));
		},

		saleBannerClicked: function(ev){
			var $a = $(ev.target);
			$a = ($a.tagName === "A" ? $a : $a.closest('a'));
			if($a.hasClass('login-required')){
				this.trackSaleBannerClick($a, false, ev);
				this.showQuickLogin(ev);
			}
			else {
				this.trackSaleBannerClick($a, true, ev);
			}
		},

		trackSaleBannerClick: function($a, shouldRedirect, ev){
			// Only send the event trigger when the link has sale banner in it
			// and the google analytics are not blocked
			if($a.find('img.sale-img').length > 0 && !Utils.trackerBlocked()){
				ev.preventDefault();
				this.url = $a.attr('href');
				var funcRedirect = null;
				if(shouldRedirect){
					funcRedirect = _.bind(function() {
							document.location = this.url;
						}, this);
				}

				MP.dispatcher.trigger(
					'saleClick',
					this.getGASalePromotion($a),
					funcRedirect
				);
			}
		},

		// create a promotion hash for use of GA
		getGASalePromotion: function($aElem){
			var saleCode = $aElem.data('sale-code');
			var saleName = $aElem.data('sale-name');
			var container = $aElem.closest('[data-sale-container]').data('sale-container').toLowerCase();
			return {
				'id': saleCode,
				'name': saleName,
				'position': container,
				'creative': 'standard sale banner'
			};
		}
	};
});
