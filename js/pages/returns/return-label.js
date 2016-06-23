// return-label.js

require([
	'underscore',
	'jquery',
	'backbone',
	], function(_, $, Backbone) {

	MP.ReturnLabel = {
		openReturnLabelWindow: function(url){
			var top = Utils.$window.height() / 2;
			var left = Utils.$window.width() / 2;
			window.open(
				url,
				'_blank',
				'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes' +
				',top=' + top + ',left=' + left
			);
		}
	};
});