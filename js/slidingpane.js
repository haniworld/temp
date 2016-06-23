!function ($) {

  "use strict";

  var SlidingPane = function (element, options) {
    this.options = options;
    this.$element = $(element).clone(true, true).show();
    this.$slidingPane =  $('#sliding-pane');

    // render the content inside the sliding pane
    var $contentPane = this.$slidingPane.find('.sliding-content');
    $contentPane.children().remove();
    $contentPane.html(this.$element);

    // register close button
    this.$slidingPane.find('.sliding-pane-close').on('click', $.proxy(this.hide, this));
  }

  SlidingPane.prototype = {

  	constructor: SlidingPane,

  	show: function () {
  		var that = this;
  		$('body').addClass('sliding-pane-open');
  	},

  	hide: function (e) {
  		$('body').removeClass('sliding-pane-open');
      }
  }


 /* SLIDING PANE JQUERY PLUGIN DEFINITION
  * ======================= */

  $.fn.slidingpane = function (option) {
    return this.each(function () {
      var options = {};
      var data  = new SlidingPane(this, options);
      if (typeof option == 'string') data[option]();
      else if (options.show) data.show();
    });
  };

  $.fn.slidingpane.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  };

  $.fn.slidingpane.Constructor = SlidingPane;


}(window.jQuery);