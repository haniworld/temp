require([
    'underscore',
    'jquery',
    'backbone',
    '_global',
    '_utils'
  ], function(_, $, Backbone) {
    MP.GATracking = Backbone.View.extend({

      initialize: function(opts){
        _.each(opts, function(funcName, evtName){
          MP.dispatcher.on(evtName, this[funcName], this);
        }, this);

      },

      trackEvent: function(eventName, category, action, label){
        dataLayer.push({
          'event': eventName,
          'category': category,
          'action': action,
          'label': label
        });
        //ga('send', 'event', category, action, label );
      },

      trackEcommerce: function(eventName, ecommerce, callback){
        var opts = {};
        opts['event'] = eventName;
        opts['ecommerce'] = ecommerce;
        if(typeof(callback) === 'function'){
          opts['eventCallback'] = callback;
        }
        dataLayer.push(opts);
      },

      // MP App
      sendAppEvent: function(url){
        if(Utils.MediaQuery.isApp()){
          location.href = url;
        }
      }
    });

});
