// Generated by CoffeeScript 1.7.1
define(function() {
  return {
    load: function() {
      var f;
      f = function(d, s, id) {
        var fjs, js;
        fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//platform.twitter.com/widgets.js";
        return fjs.parentNode.insertBefore(js, fjs);
      };
      f(document, "script", "twitter-wjs");
    }
  };
});
