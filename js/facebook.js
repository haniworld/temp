// Generated by CoffeeScript 1.7.1
define(function() {
  var appId;
  appId = 335292516550203;
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
        js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1&appId=" + appId;
        return fjs.parentNode.insertBefore(js, fjs);
      };
      f(document, 'script', 'facebook-jssdk');
    }
  };
});
