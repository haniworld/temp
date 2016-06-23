require(['jquery', 'underscore', 'backbone', 'bootstrap-tooltip', 'jquery.countdown','field-validation', '_utils'], function($, _, Backbone) {

  MP.LoginView = Backbone.View.extend({

    events: {
      'click .switch-to-signup': "toggleToSignup",
      'click .switch-to-login': "toggleToLogin",
      'submit .form-login': "submitLogin",
      'submit .form-signup': "submitSignup",
      'blur [name=dob-year]': "validateYear",
      'blur [name=dob-month]': "validateMonth",
      'blur [name=dob-day]': "validateDay",
      'keyup [name=dob-year].error': "validateYear",
      'keyup [name=dob-month].error': "validateMonth",
      'keyup [name=dob-day].error': "validateDay"
    },

    initialize: function(opts) {
      this.isModal = opts.modal;
      this.mode = opts.initialMode;
      MP.dispatcher.on('quickLoginOpen', this.showQuickLogin, this);
      MP.dispatcher.on('nagbarSignupOpen', this.showNagbarLogin, this);
      MP.dispatcher.on('ToggleModalMode', this.toggleLoginSignup, this);
    },

    render: function() {
      // remember me is checked by default
      if(typeof(rememberMe) !== 'undefined') {
        this.$('#rememberme').prop('checked', rememberMe);
      }

      this.initTooltip();

      // Copy the retained values to the visible input fields if this is callback
      this.$('#email').val(this.$('[name=email]').val());

      this.$birthdate = this.$("input[name=birthdate]");
      if(this.$birthdate.length > 0){
        this.$year = this.$('input[name=dob-year]');
        this.$month = this.$('input[name=dob-month]');
        this.$day = this.$('input[name=dob-day]');

        var birthdate = this.$birthdate.val().split('-');
        if(birthdate.length == 3){
          this.$year.val(birthdate[0]);
          this.$month.val(birthdate[1]);
          this.$day.val(birthdate[2]);
        }
      }
    },

    initTooltip: function() {
      // show info tooltips
      this.$('.info-dob, .info-gender, .info-name, .required-symbol').tooltip({
        trigger: Utils.MediaQuery.isTouchScreen() ? 'click' : undefined
      });

      this.$('input.email, input.password, input.fullname, input[name=dob-year], input[name=dob-month], input[name=dob-day]').tooltip({
        trigger: 'focus'
      });

      if (document.documentElement.offsetWidth < 720) {
        return;
      }
      $.fn.tooltip.defaults.trigger = Modernizr.touch ? 'manual' : 'hover';
      $('.remember').tooltip({
        placement: 'right',
        html: 'true',
        title: "<p>自動ログインを有効にすると、次回以降メールアドレスとパスワードの入力を省略できます。</p>\n<p>お使いのブラウザのクッキーを削除することも可能ですが、その場合MILLEPORTEに入場するたびに、ユーザ名とパスワードを再入力する必要があります。</p>\n<p>お使いのコンピュータが公共のもの、あるいは何人もの人がアクセスする共有のものである場合、セキュリティの観点からこの機能をオフにすることをお勧めします。</p>"
      });
      if (Modernizr.touch) {
        $('.remember input').click(function(event) {
          var checked;
          event.stopPropagation();
          checked = $(event.currentTarget).attr('checked');
          $('.remember').tooltip(checked ? 'show' : 'hide');
        });
        $('body').on('touchstart', function(event) {
          $('.remember').tooltip('hide');
        });
      }
    },

    showNagbarLogin: function(email){
      if($('#quicklogin').length > 0) {
        this.showQuickLogin('signup', 'Nagbar');
        this.loginModal.find('.login-message-content').hide();
        if(email){
          this.loginModal.find('.email').val(email);
        }
      }
      else {
      }
    },

    showQuickLogin: function(mode, formTrigger, opts) {
      if(typeof(mode) == 'undefined'){
        mode = this.mode;
      }

      // The quicklogin div is outside of this element
      if($('#quicklogin').length > 0) {
        this.loginModal = $('#quicklogin');
        this.loginModal.find('[name=formTrigger]').val(formTrigger);
        if(this.mode != mode){
          this.toggleLoginSignup(undefined, mode);
        }

        if(typeof(opts) !== 'undefined' && opts.message){
          this.loginModal.find('.login-message-content').text(opts.message);
        }

        // To reuse the modal login for in-page form, add/remove the modal class
        this.loginModal.one('shown', _.bind(function(){
          this.loginModal.addClass('modal');
          MP.dispatcher.trigger('ModalRegistrationShown', mode, formTrigger);
        }, this));
        this.loginModal.one('hidden', _.bind(function(){
          this.loginModal.attr('style', ''); // remove element level display attribute
          this.loginModal.removeClass('modal');
          this.toggleToSignup();
        }, this));

        if(Utils.MediaQuery.isTouchScreen() ) {
          this.loginModal.one('shown', _.bind(function(){
            this.loginModal.css('top', Utils.$window.scrollTop() + 10);
          }, this));
        }
        else {
          this.loginModal.one('shown', _.bind(function(){
            this.loginModal.css({
              'position': 'absolute',
              'top': Utils.$window.scrollTop() + 10,
              'margin-top': '1em'
            });
          }, this));
        }
        this.loginModal.modal('show');
      }
    },

    toggleToLogin: function(ev){
      this.toggleLoginSignup(ev, 'login');
    },

    toggleToSignup: function(ev){
      this.toggleLoginSignup(ev, 'signup');
    },

    toggleLoginSignup: function(ev, mode) {
        if(this.isModal){
          if(typeof(ev) != 'undefined'){
            ev.preventDefault();
            ev.stopPropagation();
          }
          if(mode != this.mode){
            this.$('.form-login').toggle();
            this.$('.form-signup').toggle();
            this.mode = (this.$('.form-login').css('display') == 'none') ? 'signup' : 'login';
          }
        }
        else{
          var loc = $(ev.target).data('href');
          if(loc) {
            window.location = loc;
          }
        }
    },

    submitLogin: function(ev) {
      var $form = this.$(ev.target);
      this.submitForm(ev, $form, 'login');
    },

    submitSignup: function(ev) {
      var $form = this.$(ev.target);
      this.submitForm(ev, $form, 'signup');
    },

    validateSignupForm: function(){
      var formValid = true;
      formValid = this.validateForm();

      this.$('[name=email]').val(this.$('#email').val());
      formValid = formValid && this.validatePasswordConfirmation();

      if(this.$birthdate.length > 0){
        this.$("input[name=birthdate]").val("");
        // check the birthday inputs
        var yearValid = this.validateYear();
        var monthValid = this.validateMonth();
        var dayValid = this.validateDay();

        if(yearValid && monthValid && dayValid){
          this.$("input[name=birthdate]").val(this.$year.val() + "-" + this.$month.val() + "-" + this.$day.val());
        }
        else{
          return false;
        }
      }
      return formValid;

    },

    toggleLoading: function($form, show){
      var $button = $form.find('#submitLoginButton');
      $button.prop('disabled', show);
      // IE8 and 9 is too much work on the styling to show spinner. Disabling.
      if(!Utils.MediaQuery.isOldIEs()){
        $button.closest('.btn-submit').toggleClass('loading', show);
      }
    },

    submitForm: function(ev, $form, mode) {
      if(this.isModal == true) {
        ev.preventDefault();
        if( mode == 'signup' && !this.validateSignupForm() ){
          return false;
        }

        var formTrigger = $form.find('[name=formTrigger]').val();
        var $error = $form.find('.error-messages');
        $error.hide();

        // handle ajax login request
        var contentType = "application/json";
        if(Utils.MediaQuery.isIE8() || Utils.MediaQuery.isIE9() ){
          contentType = "text/html";
        }
        this.toggleLoading($form, true);
        var url = $form.attr('action');
        if(mode == 'signup'){
          url = ($form.hasClass('https') ? 'https:': 'http:') + '//' + $(location).attr('host') + '/json/signup';
        }
        $.ajax({
            type: $form.attr('method'),
            url: url,
            data: $form.serialize(),
            context: this,
            success: function (data) {
                if(Utils.MediaQuery.isOldIEs() ){
                  data = JSON.parse(data);
                }
                if(data.success == true || data.success == 'true') {
                  // Fire either 'loginSuccess' or 'signupSuccess'
                  MP.dispatcher.trigger( mode + 'Success', {token: data.token, formTrigger: formTrigger});
                }
                else {
                  if(data.error) {
                    $error.html(_.map(data.error, function(error){ return error + "<br/>"}));
                  }
                  $error.show();
                }
                this.toggleLoading($form, false);
            },
            error: function(data) {
              this.toggleLoading($form, false);
              $error.html("サーバーエラーが起こりました。しばらくたっても問題が解決されない場合は、カスタマーサポートにご連絡ください。");
              $error.show();
              if(Utils.MediaQuery.isOldIEs()){
                  data = JSON.parse(data);
              }
              console.error('Server error occured in server during ' + mode, data);
            }
        });

        ev.preventDefault();
      }
      else { // not modal (stndard form)
        if(mode == 'signup'){
          if(this.validateSignupForm()){
            return true;
          }
          else{
            ev.preventDefault();
            return false;
          }
        }
        else{
          return true;
        }
      }
    }
  });

  _.extend(MP.LoginView.prototype, MP.FieldValidation);

});
