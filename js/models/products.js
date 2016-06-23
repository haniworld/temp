require([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	// Product Model used for a product in a sale
	MP.Product = Backbone.Model.extend({});

	MP.Products = Backbone.Collection.extend({

		model: MP.Product,

		initialize: function(opts) {
			this.saleCode = opts.saleCode; // this uniquely identifies a sale
		},

		url: function() {
			return '/json/products/' + this.saleCode;
		}
	});

});