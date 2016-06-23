require([
    'underscore',
    'jquery',
    'backbone',
    'google-analytics/ga-tracking'
  ], function(_, $, Backbone) {

    MP.CheckoutTracking = MP.GATracking.extend({

      initialize: function(){
        var obj = this;
        _.each(Utils.$body.attr('class').split(' '), function(className){
          if(className.startsWith('page-shopcheckout')){
            obj.checkoutStep(className.match(/page-shop(.*)/)[1]);
            return false;
          }
        });
      },

      checkoutStep: function(stepName){
        var stepNum = 1, opt;
        switch(stepName){
          case 'checkoutaddress':
            stepNum = 2;
            break;
          case 'checkoutpaymentmethod':
            stepNum = 3;
            break;
          case 'checkoutpaymentmethodfinal':
            stepNum = 4;
            opt = this.$('.payment-method li').data('payment-type')
            break;
          case 'checkoutconfirmation':
            stepNum = 5;
            break;
        }
        this.trackEcommerce('checkout',{'checkout': {'actionField': {'step': stepNum, 'option': opt}} });
      }
    });
});