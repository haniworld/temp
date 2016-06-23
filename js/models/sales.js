require([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	// Sale Model used for Sale Banner
	MP.Sale = Backbone.Model.extend({});

	MP.Sales = Backbone.Collection.extend({

		TIMELINE: ['current', 'upcoming', 'all'],
		CATEGORIES: ['women', 'men', 'kids', 'lifestyle', 'gourmet'],

		defaults: {
			timeline: 'current',
			category: 'women'
		},

		model: MP.Sale,

		initialize: function(opts) {
			this.timeline =  (opts && opts.timeline && _.indexOf(this.TIMELINE, opts.timeline) > 0) ? opts.timeline : this.defaults.timeline;
			this.category =  (opts && opts.category && _.indexOf(this.CATEGORIES, opts.category) > 0) ? opts.category : this.defaults.category;
		},

		url: function() {
			// /json/sales/(current|upcoming|all)/(women|men|kids|lifestyle|gourmet
			return '/json/sales/' + this.timeline + '/' + this.category;
		}
	});

	MP.CurrentSales = {};
	MP.CurrentSales['women']= new MP.Sales();
	MP.CurrentSales['men']= new MP.Sales({category: 'men'});
	MP.CurrentSales['kids']= new MP.Sales({category: 'kids'});
	MP.CurrentSales['lifestyle']= new MP.Sales({category: 'lifestyle'});
	MP.CurrentSales['gourmet']= new MP.Sales({category: 'gourmet'});
});