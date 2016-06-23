require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

	MP.FieldValidation = {

		passwordValidator: new RegExp("^[\\x20-\\x7E]{6,20}$", "i"),
		emailValidator: new RegExp("[\\.a-z\\d\\!\\#\\$\\%\\*\\/\\?\\|\\^\\{\\}\\`\\~\\&\\'\\+\\-\\=\\_]+\\@[\\da-z]+([\\.-][\\da-z]+)*\\.[a-z]{2,6}$", "i"),
		dobYearValidator: new RegExp("^(19|20)[0-9][0-9]$"),
		dobMonthValidator: new RegExp("(^0?[1-9]$)|(^1[0-2]$)"),
		dobDayValidator: new RegExp("(^0?[1-9]$)|(^[1-2][0-9]$)|(^3[0-1]$)"),

		validateRequired: function(){
			var valid = true;
			var $requiredFields = this.$('[data-required]:not(.error):visible');
			var multipleChoices = [];
			$requiredFields.each(_.bind(function(index, req){
				var $req = $(req);
				if( ($req.prop('tagName') === "INPUT" && ($req.attr('type') === 'text' || $req.attr('type') === 'email') ) || $req.prop('tagName') === "TEXTAREA"){
					if(_.isEmpty($req.val()) )  {
						this.showValidation($req, $req.data('validation-message'));
						valid = false;
					}
				}
				if( $req.prop('tagName') === 'SELECT' ){
					if(_.isEmpty($req.val()) || _.isEmpty($req.children(':selected').text()) )  {
						this.showValidation($req.closest('.form-dropdown'), $req.data('validation-message'));
						valid = false;
					}
				}
				var name = $req.attr('name');
				if($req.prop('tagName') === "INPUT" && $req.attr('type') === 'radio' && !_.contains(multipleChoices, name) ){
					// so that it won't check the more than one of the same input multiple times
					// e.g. radio box has multiple inputs but only one selectable input
					multipleChoices.push(name);
					if(!(this.$('[name=' + name + ']:checked').val()) ){
						var $container = $req.closest('.validation-group');
						this.showValidation($container, $container.data('validation-message'));
						valid = false;
					}
				}
				if($req.prop('tagName') === 'INPUT' && $req.attr('type') === 'checkbox') {
					if($req.attr('checked') !== 'checked'){
						this.showValidation($req.closest('.checkbox'), $req.data('validation-message'));
						valid = false;
					}
				}
			}, this));
			return valid;
		},

		validateFormat: function(){
			var valid = true;
			var $fields = this.$('input[data-validation-format]:not(.error):visible');
			$fields.each(_.bind(function(index, field){
				var $field = $(field);
				switch($field.data('validation-format')){
					case 'katakana':
						if(!_.isEmpty($field.val()) && !$field.val().isFullWidthKatakana()){
							this.showValidation($field, $field.data('validation-message'));
							valid = false;
						}
						break;
					case 'creditcard':
						// match 16 digits
						if(!_.isEmpty($field.val()) && !($field.val().match(/^[0-9]{12,19}$/)) ){
							this.showValidation($field, $field.data('validation-message'));
							valid = false;
						}
						break;
					case 'email':
						if(!_.isEmpty($field.val()) && this.emailValidator.exec($field.val()) == null  ){
							this.showValidation($field, $field.data('validation-message'));
							valid = false;
						}
						break;
				}
			}, this));
			return valid;
		},

		validateLength: function(ev){
			var $target = ev ? this.$(ev.target) : this.$('[data-validation-maxlength]:not(.error):visible');
			if($target.length > 0){
				$target.removeClass('error');
				var maxLength = parseInt($target.data('validation-maxlength'));
				var minLength = parseInt($target.data('validation-minlength'));
				if( $target.val().length < minLength || $target.val().length > maxLength ){
					this.showValidLength($target, minLength, maxLength);
					return false;
				}
				return true;
			}
			return true;
		},

		validatePasswordConfirmation: function(){
			var $pwdConfirm = this.$('[data-validation-password-confirmation]');
			if($pwdConfirm.length > 0){
				var $pwdField = this.$($pwdConfirm.data('validation-password-confirmation'));
				if($pwdField.val() != $pwdConfirm.val()){
					this.showValidation($pwdConfirm, $pwdConfirm.attr('data-original-title'));
					return false;
				}
			}
			return true;
		},

		showValidLength: function($target, minLength, maxLength){
			var msg = "";
			if(minLength > 0){
				msg +=  minLength + "文字以上";
			}
			if(maxLength > 0){
				msg += maxLength + "文字以内";
			}
			msg += "で入力して下さい。";
			this.showValidation($target, msg);
		},

		validateYear: function(){
			this.hideValidation(this.$year);
			if(this.$year.val().length <= 0 || this.dobYearValidator.exec(this.$year.val()) == null){
				this.showValidation(this.$year);
				return false;
			}
			return true;
		},

		validateMonth: function(){
			this.hideValidation(this.$month);
			if(this.$month.val().length <= 0 || this.dobMonthValidator.exec(this.$month.val()) == null){
				this.showValidation(this.$month);
				return false;
			}
			return true;
		},

		validateDay: function(ev){
			this.hideValidation(this.$day);
			if(this.$day.val().length <= 0 || this.dobDayValidator.exec(this.$day.val()) == null){
				this.showValidation(this.$day);
				return false;
			}
			return true;
		},

		showValidation: function($elem, message){
			$elem.addClass('error');
			if(message){
				// look for which element and direction the message should be attached to
				var $attach = $elem, options = {};
				if($elem.data('message-attach')){
					$attach = $elem.prev($elem.data('message-attach'));
				}
				if($elem.data('message-placement')){
					options['placement'] = function(){ return $elem.data('message-placement')};
				}
				$attach.attr('title', message);
				$attach.tooltip(options);
				$attach.tooltip('show');
			}
		},

		hideValidation: function($elem){
			$elem.removeClass('error');
			$elem.tooltip('destroy');
		},

		validateForm: function(){
			this.hideValidation(this.$('.error'));
			var validRequired, validFormat, validLength = true;
			validRequired = this.validateRequired();
			validFormat = this.validateFormat();
			validLength = this.validateLength();
			return (validRequired && validFormat && validLength);
		}
	};
});