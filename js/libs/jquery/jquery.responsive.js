// Generated by CoffeeScript 1.7.1
var f;

f = function($) {
  var applyRules, checkViewport, height, width;
  width = $(window).width();
  height = $(window).height();
  checkViewport = function(viewport) {
    var a, prop, val;
    a = viewport.split(' ');
    prop = a[0];
    val = parseInt(a[1]);
    if (prop === 'min-height') {
      return height >= val;
    }
    return false;
  };
  applyRules = function(rules) {
    $(rules.selector).css(rules.styles);
  };
  $.fn.responsive = function(styles) {
    var style, _i, _len;
    for (_i = 0, _len = styles.length; _i < _len; _i++) {
      style = styles[_i];
      if (checkViewport(style.viewport)) {
        applyRules(style.rules);
      }
    }
  };
  return $;
};

f(jQuery);

if (typeof define === 'function') {
  define('jquery.responsive', ['jquery'], f);
}
