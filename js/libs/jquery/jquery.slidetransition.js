(function ($) {
    /*
        jquery.slide-transition plug-in

        Requirements:
        -------------
        You'll need to define these two styles to make this work:

        .height-transition {
            -webkit-transition: max-height 0.5s ease-in-out;
            -moz-transition: max-height 0.5s ease-in-out;
            -o-transition: max-height 0.5s ease-in-out;
            transition: max-height 0.5s ease-in-out;
            overflow-y: hidden;
        }
        .height-transition-hidden {
            max-height: 0;
        }

        You need to wrap your actual content that you
        plan to slide up and down into a container. This
        container has to have a class of height-transition
        and optionally height-transition-hidden to initially
        hide the container (collapsed).

        <div id="slider-container"
                class="height-transition height-transition-hidden">
            <div id="Actual">
                Your actual content to slide up or down goes here
            </div>
        </div>

        To call it:
        -----------
        var $sw = $("#slide-container");

        if (!$sw.hasClass("height-transition-hidden"))
            $sw.slideUpTransition();
        else
            $sw.slideDownTransition();
    */
    var isTransitionsSupported = function() {
        var thisBody = document.body || document.documentElement,
            thisStyle = thisBody.style,
            support = thisStyle.transition !== undefined ||
                      thisStyle.WebkitTransition !== undefined ||
                      thisStyle.MozTransition !== undefined ||
                      thisStyle.MsTransition !== undefined ||
                      thisStyle.OTransition !== undefined;
        return support;
    };
    var transEndEventNames = 'webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd transitionend';
    $.fn.slideUpTransition = function(minHeight, callback) {
        minHeight = minHeight ? minHeight : '0';
        return this.each(function() {
            var $el = $(this);
            $el.css({
                    "max-height": $el.outerHeight()
                });
            setTimeout(function() {
                if(typeof(callback) === 'function' && isTransitionsSupported()){
                    $el.one(transEndEventNames, callback);
                }
                $el.css("max-height", minHeight);
                if(typeof(callback) === 'function' && !isTransitionsSupported()){
                    callback.call();
                }
            }, 20);
            $el.addClass("height-transition-hidden");
        });
    };

    $.fn.slideDownTransition = function(minHeight, maxHeight, callback) {
        minHeight = minHeight ? minHeight : '0';
        return this.each(function() {
            var $el = $(this);
            $el.removeClass("height-transition-hidden");

            // temporarily make visible to get the size
            $el.css("max-height", "none");
            var height = maxHeight || $el.outerHeight();

            // reset to 0 then animate with small delay
            $el.css("max-height", minHeight);

            setTimeout(function() {
                $el.css({
                    "max-height": height
                });
                if(typeof(callback) === 'function'){
                    callback.call();
                }
            }, 1);
        });
    };
}).call(this, jQuery);