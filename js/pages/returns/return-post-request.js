require([
	'underscore',
	'jquery',
	'backbone'
	], function(_, $, Backbone) {

	// mixin object should have the following defined
	// this.$form
	// this.$error
	// The submit button should have '.action' in markup
	MP.ReturnPostRequest = {
		// this ajax request requies the API to return data.success
		submit: function(jsonData, cbSuccess, cbError){
			this.toggleLoading(true);
			$.ajax({
				type: this.$form.attr('method'),
				url: this.$form.attr('action'),
				data: JSON.stringify(jsonData),
				dataType: 'json',
				contentType: "application/json;charset=utf-8",
				processData: false,
				context: this,
				success: function (data) {
					if(data.success == true || data.success == 'true') {
						cbSuccess.call(this, data);
					}
					else {
						if(typeof(cbError) === 'function') { cbError.call(this, data); };
					}
					this.toggleLoading(false);
				},
				error: function(data) {
					this.toggleLoading(false);
					if(typeof(cbError) === 'function') {
						data.errors = "サーバーエラーが起こりました。しばらくたっても問題が解決されない場合は、カスタマーサポートにご連絡ください。詳細：" + data;
						cbError.call(this, data);
					};
					console.error('Server error occured in server during processing: ' + data);
				}
			});
		},

		// if show = true, disable any action buttons in the form
		toggleLoading: function(show){
			this.$overlay = this.$overlay || $('.return-overlay');
			var $buttons = this.$form.find('.action');
			$buttons.prop('disabled', show);
			this.$overlay.toggleClass('loading', show);
			Utils.scrollBodyTo(0, 1);
		}
	};

});