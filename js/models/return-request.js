//return-request.js

require(['jquery', 'underscore', 'backbone'
], function($, _, Backbone){

	MP.ReturnRequest = Backbone.Model.extend({});

	MP.ReturnRequests = Backbone.Collection.extend({

		model: MP.ReturnRequest,

		url: function() {
			return '/json/returnrequests';
		},

		parse: function(response){
			return response.requests;
		}
	});

});