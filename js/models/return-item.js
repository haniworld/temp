require(['jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	MP.ReturnItem = Backbone.Model.extend({});

	MP.ReturnItems = Backbone.Collection.extend({

		model: MP.ReturnItem,

		url: function() {
			return '/json/returns';
		},

		parse: function(response){
			MP.ReturnPledges = response.pledges;
			MP.ReturnReasons = response.reasons;
			// separate each product by ship-date
			var items = [];
			_.each(response['items'], function(item){
				_.each(item.pieces, function(piece){
					items.push(_.extend(item, piece));
				});
			});
			return items;
		}
	});

});