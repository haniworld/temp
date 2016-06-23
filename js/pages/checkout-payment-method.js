require(['jquery', 'underscore', 'backbone', '_utils'], function($, _, Backbone) {
	MP.CheckoutPaymentPageView = Backbone.View.extend({

		events: {
			'change #agreement-acceptance': 'toggleAgreement'
		},

		render: function() {
			if(this.$('input[name=paidy-selected]').val() === 'true'){
				this.loadPaidy();
			}
			// Check user acceptance agreement by default
			this.$('#agreement-acceptance').attr('checked', this.$('input[name=termsAccepted]').val() === 'true');
		},

		toggleAgreement: function(ev){
			this.$('input[name=termsAccepted]').val($(ev.target).attr('checked') === 'checked');
		},

		loadPaidy: function() {
			var script = document.createElement('script');
			var firstScriptTag = document.head || document.getElementsByTagName('head')[0];
			script.onload = function(){
				var isForm = false;
				var paidy = Paidy.configure({
					key: paidyApiAccessToken,
					logo_url: paidyCheckoutDialogLogoUrl,
					callback: function(data){
						$('#paidy-checkout-button').html('注文を確定中です').prop('disabled', 'disabled');
						$('#processing-dialog').fadeIn('600');
						$('#general-overlay').fadeIn('300');
						$('[name = paymentMethodMetadata]').val(data.payment_id);
						$('#checkoutSubmit').trigger('click');
						Utils.$window.on("beforeunload", function(ev) {
							if (!isForm) return '注文を確定中です。ブラウザを閉じないでください。';
							isForm = false;
						});
					}
				});
				$('#paidy-checkout-button').on('click', function(ev) {
					ev.preventDefault();
					var data = paidyAuthorizeRequestJson;
					paidy.launch(data);
				});
				$('form').on('submit', function() { isForm = true; });
				$('a').on('click', function() { isForm = false; });
			};
			script.src = "https://apps.paidy.com";
			script.async = true;
			firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
		}
	});
});
