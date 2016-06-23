require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

	MP.ProductTracking = {
		prodImageLoaded: function(ev){
			var $target = this.$(ev.target).closest('a');
			var containerName = $target.closest('[data-prod-container]').data('prod-container');
			MP.dispatcher.trigger('productImpression', this.getGAProduct($target, containerName));
		},

		prodClicked: function(ev){
			// ignore if the google analytics are disabled
			if(!Utils.trackerBlocked()){
				ev.preventDefault();
				var $target = $(ev.target).closest('a');
				var containerName = $target.closest('[data-prod-container]').data('prod-container');
				this.url = $target.attr('href');
				MP.dispatcher.trigger(
					'productClick',
					containerName,
					this.getGAProduct($target, containerName),
					_.bind(function() {
						document.location = this.url;
					}, this)
				);
			}
		},

		// create a product hash for use of GA
		getGAProduct: function($prodElement, containerName){
			return {
				'name': $prodElement.data('prod-name'),
				'id': $prodElement.data('prod-id'),
				'price': '',
				'brand': this.saleCode,
				'category': this.productGenres,
				'list': containerName,
				'position': $prodElement.data('pos')
			};
		}
	};
});