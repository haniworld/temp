// Generated by CoffeeScript 1.7.1
require(['jquery', 'libs/jquery/fancybox/jquery.fancybox-1.3.4.pack', 'shop'], function($) {

  var init = function() {
    $('.ccj-redeem .points').on('keydown', function(event) {
      var charCode;
      charCode = event.which ? event.which : event.keyCode;
      if (charCode === 37 || charCode === 39 || charCode === 46 || charCode === 8) {
        return true;
      } else if (charCode >= 48 && charCode <= 57) {
        return true;
      } else if (charCode >= 96 && charCode <= 105) {
        return true;
      }
      return false;
    });
    $('.ccj-redeem .points').on('keyup', function(event) {
      var currentValue, newValue;
      currentValue = $(this).val();
      if (currentValue > max) {
        $(this).val(max);
      }
      newValue = total - Math.floor(currentValue * 0.4);
      $('.ccj-redeem .pay').val(newValue);
    });
  };

  MP.dispatcher.on('shopJsRendered', function(){
    $(".loginBoxLink").fancybox({
      'width' : 740,
      'height' : 420,
      'type' : 'iframe',
      'onComplete' : function() {
        if (navigator.userAgent.indexOf('iPhone')  > 0 ||
          navigator.userAgent.indexOf('iPad')    > 0 ||
          navigator.userAgent.indexOf('iPod')    > 0 ||
          navigator.userAgent.indexOf('Android') > 0) {
          $(window).unbind("resize.fb");
        }
      },
      'transitionOut' : 'none'
    });
    init();
  });
});