// Generated by CoffeeScript 1.7.1
(function($) {
  $.fn.oddify = function() {
    return this.each(function() {
      var items;
      return items = $('tr', this).filter(':odd').addClass('odd');
    });
  };
  if (typeof define === 'function') {
    return define('jquery.oddify', ['jquery'], function() {
      return $;
    });
  }
}).call(this, jQuery);
