require(['jquery', 'underscore', 'backbone', 'field-validation', '_utils', 'jquery.autofilladdress'], function($, _, Backbone) {
	MP.AccountMailView = Backbone.View.extend({

		render: function() {
			// If the secondary email is empty, check the mail options by default
			if( _.isEmpty(this.$('#email2').val()) ){
				this.$('#cbEmail2Newsletter').attr('checked', true);
				this.$('#cbEmail2Transactions').attr('checked', true);
			}
			return this;
		}
	});

	MP.AccountInviteFriends = Backbone.View.extend({

		render: function(){
			// friends invitation tracking
			var $friendsInvited = this.$('#tellMoreFriends [name=invitationSuccess]');
			if( $friendsInvited.length > 0){
				if($friendsInvited.val() == 'true'){
					var emailLink = this.$('[name=anonymNewInvitationLink]').val();
					// _gaq.push(['_trackEvent', 'FriendsInvitation', 'EmailSent', emailLink]);
					// ga('send', 'event', 'FriendsInvitation', 'EmailSent', emailLink);
					MP.dispatcher.trigger('friendsInvited');
				}
			}

			this.$('.anonym-link').on('focus', function(){
				var emailLink = $(this).val();
				// _gaq.push(['_trackEvent', 'FriendsInvitation', 'LinkFocused', emailLink]);
				// ga('send', 'event', 'FriendsInvitation', 'LinkFocused', emailLink);
			});

			this.$('a.invitation-link').on('click', function(){
				// _gaq.push(['_trackEvent', 'Clicked elements', 'FriendsInvitationLink Clicked']);
				// ga('send', 'event', 'Clicked elements', 'FriendsInvitationLink Clicked');
			});

			if (Utils.MediaQuery.isTouchScreen()) {
				this.$('.autoselect').removeAttr("readonly");
			}
			else {
				this.$('.autoselect').on('click', function() {
					$(this).select();
				});
			}

			this.$('.invite-recipient').on({
				'focus': function(event) {
					var el;
					el = event.currentTarget;
					if (!$(el).data('placeholder')) {
						$(el).data('placeholder', el.value);
					}
					if (el.value.indexOf('. ') >= 0) {
						return el.value = '';
					}
				},
				'blur': function(event) {
					var el, placeholder, str;
					el = event.currentTarget;
					str = $.trim(el.value);
					if (!str.length || str.indexOf('. ') >= 0) {
						placeholder = $(el).data('placeholder');
						return el.value = placeholder || el.value;
					}
				}
			});
		}
	});

	MP.AccountChangePasswordView = Backbone.View.extend({
		events: {
			'click #submit-form': 'validateForm'
		},

		render: function(){
			this.$('input[type=password]').tooltip({ trigger: 'focus'});
		}
	});

	_.extend(MP.AccountChangePasswordView.prototype, MP.FieldValidation);

	MP.AccountPersonalDataView = Backbone.View.extend({
		events: {
			'click input#submit-form': 'validateForm'
		},

		render: function(){
			return this;
		}
	});

	_.extend(MP.AccountPersonalDataView.prototype, MP.FieldValidation);

	MP.PaymentFormView =  Backbone.View.extend({
		events: {
			'click input[name=checkoutSubmit]': 'validateForm'
		}
	});

	_.extend(MP.PaymentFormView.prototype, MP.FieldValidation);

	MP.AddressFormView = Backbone.View.extend({
		events: {
			'click input.submit-address': 'validateForm'
		},

		initialize: function(){
			$.autofilladdress.defaults.path = baseUrl + "/zipcodes/zip-###.json";
			var auto = $('#zip3').val() !== '' && $('#zip4').val() !== '' && $('#prefecture').val() === '' && $('#address1').val() === '';
			$('#zip3, #zip4').autofilladdress({
				auto: auto,
				fill: {
				prefecture: '#prefecture',
				municipality: '#address1',
				subarea: '#address1'
				},
				focusOnSuccess: '#address1'
			});
		}
	});

	_.extend(MP.AddressFormView.prototype, MP.FieldValidation);
});
