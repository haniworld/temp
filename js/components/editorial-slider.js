require(['jquery', '_global', 'slick', '_utils'], function($, Slick) {

    // Add the additional behavior for editorial slider
    MP.Components.addCustomerEditorialSliderBehavior = function($slider) {
      $slider.on('beforeChange', function(){
        Utils.$window.trigger('scroll');
      });
      // Enable this behavior only on center mode
      if($slider.slick('slickGetOption', 'centerMode')) {

        // add clicking behavior
        $slider.find('.editorial-slide a').on('click', function(ev){
          if($(this).parent().hasClass('slick-center')) {
            // if it's center banner, allow the redirection
            return true;
          }
          else {
            // if it't not center banner, just slide to the others
            ev.preventDefault();
          }
        });
      }

      // On swipe and click events, stop the movement
      // These fire every time which is not very efficient
      $slider.on('swipe', function(event, slick, direction) {
        $(this).slick('slickPause');
      });

      $slider.find(".slick-prev").on('click', function(event) {
        $(this).parent('.editorial-slider').slick('slickPause');
      });

      $slider.find(".slick-next").on('click', function(event) {
        $(this).parent('.editorial-slider').slick('slickPause');
      });

    };

 });