// Generated by CoffeeScript 1.7.1
require(['jquery'], function($) {
  var months;
  months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEZ"];
  return window.fbAsyncInit = function() {
    return FB.getLoginStatus(function(response) {
      if (response.status !== 'connected') {
        return;
      }
      return FB.api('/me', function(response) {
        var day, month, year, _ref;
        $('#japanname').val(response.name);
        $('#email').val(response.email);
        $("#" + response.gender).get(0).checked = true;
        _ref = response.birthday.split('/'), month = _ref[0], day = _ref[1], year = _ref[2];
        $('#bYear').val(year);
        $('#bMonth').val(months[month - 1]);
        return $('#bDay').val(day);
      });
    });
  };
});
