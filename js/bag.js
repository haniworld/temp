// Generated by CoffeeScript 1.7.1
require(['jquery', 'underscore', 'backbone', '_utils', 'jquery.dropdown'], function($, _, Backbone) {

  MP.BagView = Backbone.View.extend({

    initialize: function() {
      MP.dispatcher.on('itemAdded', function(){
        this.highlightBag();
        // show the bag contents only when in desktop mode
        if(!Utils.MediaQuery.isMobile()) {
          this.showBagContents();
        }
      }, this);

      this.$bagCountdown = this.$('#bag-contents [data-countdown]');
      this.$bagCountdown.one('itemExpiringStarted', function(){
        MP.dispatcher.trigger('basketExpiring');
      });

      this.$bagCountdown.one('countdownStopped', _.bind(function(){
        MP.dispatcher.trigger('basketExpired');
        this.resetBasket();
      }, this));

      this.$.freeshippingCountdown = this.$('.freeshipping [data-countdown]').first();
      this.$.freeshippingCountdown.one('itemExpiringStarted', function(){
        MP.dispatcher.trigger('freeshippingCountdown', 'expiring');
      });
      this.$.freeshippingCountdown.one('countdownStopped', function(){
        MP.dispatcher.trigger('freeshippingCountdown', 'expired');
      });
    },

    render: function() {
      this.$toggleBagEl = $('.bag-complete .bag-infos');
      this.$toggleBagEl.dropdown({
        animate: true
      });

      // Register another event listener for mobile devices
      if(Utils.MediaQuery.isMobile()) {
        this.$toggleBagEl.on('click touchstart', function() {
          var $linkCheckout = $('a.checkout');
          if(!$linkCheckout.is(':visible')){
            var url = $('a.checkout').attr('href');  // go to checkuot page
            window.location.href = url;
          }
        });
      }

      $('.bag .bag-close').on('click', _.bind(function(){
        event.preventDefault();
        this.$toggleBagEl.dropdown('close');
      }, this));
    },

    highlightBag: function() {
      setTimeout(_.bind(function(){
        this.$toggleBagEl.dropdown('open');
      }, this), 1500);
    },

    showBagContents: function() {
      this.$toggleBagEl.trigger('click');

      setTimeout(_.bind(function() {
        this.$toggleBagEl.dropdown('close');
      }, this), 5000);
    },

    resetBasket: function() {
      this.$toggleBagEl.find('.item-count span').text("0");
      this.$toggleBagEl.find('.countdown-amount').remove();
    }
  });

});
