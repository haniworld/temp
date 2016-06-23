require([
  'jquery',
  'underscore',
  'backbone'
], function($) {
	// create a global event dispatcher
	MP = {};
	MP.Components = {};
	MP.dispatcher = _.clone(Backbone.Events);

	// helper function for array
	Array.prototype.removeAll = function(values){
		_.each(values, function(v){
			var index = _.indexOf(this, v);
			this.splice(index, 1);
		}, this);
	};

	// helper function for String
	String.prototype.capitalize = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	};

	String.prototype.startsWith = function(value) {
		return this.indexOf(value) == 0;
	};

	String.prototype.isFullWidthKatakana = function(){
		return this.match(/^[\u30A0-\u30FF]+$/);
	};
});
