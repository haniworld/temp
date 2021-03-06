// Generated by CoffeeScript 1.7.1
require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

  MP.NagBarView = Backbone.View.extend({
    events: {
      'click .nagbar-registration': "showNagbarLogin",
      'click .nagbar-close': 'closeNagbar',
      'focus [name=nag-email]': 'openNagbar',
      'click .nagbar-title': 'openNagbar'
    },

    render: function() {
      // hack for the IOS8 bug
      if(Utils.MediaQuery.isIOS8Up()){
        this.openNagbar();
        this.$('.email').closest('.control-group').remove();
      }
      return this;
    },

    showNagbarLogin: function(ev){
    	ev.preventDefault();
      if(Utils.MediaQuery.isIOS8Up()){
        MP.dispatcher.trigger('nagbarSignupOpen');
      }
      else{
    	 MP.dispatcher.trigger('nagbarSignupOpen', this.$('[name=nag-email]').val());
      }
    },

    closeNagbar: function(ev) {
      ev.preventDefault();
      this.$el.removeClass('nagbar-open');
    },

    openNagbar: function(){
    	this.$el.addClass('nagbar-open');
    }
  });
});
