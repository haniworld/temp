//return-cancel-dialog.js

require([
	'underscore',
	'jquery',
	'backbone',
	'templates'
	], function(_, $, Backbone, Templates) {

	MP.ReturnCancelDialog = Backbone.View.extend({
		events: {
			'click .cancel-ok': 'confirmYes',
			'click .cancel-cancel': 'confirmNo'
		},

		initialize: function(){
			this.initialized = false;
			MP.dispatcher.on('returnCancelDialogOpen', this.show, this);
		},

		render: function(){
			return this;
		},

		show: function(){
			if(this.initialized == false){
				this.$el.modal({
					backdrop: 'static',
					keyboard: false
				});
				this.initialized = true;
			}
			else {
				this.$el.modal('show');
			}

		},

		hide: function(){
			this.$el.modal('hide');
		},

		confirmYes: function(){
			MP.dispatcher.trigger("returnCancelConfirmed", true);
			this.hide();
		},

		confirmNo: function(){
			MP.dispatcher.trigger("returnCancelConfirmed", false);
			this.hide();
		}
	});
});



