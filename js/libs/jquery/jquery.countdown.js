// Generated by CoffeeScript 1.7.1
define(['jquery', 'underscore'], function($, _) {
  var DAY_IN_SECONDS = 60 * 60 * 24;
  var HOUR_IN_SECONDS = 60 * 60;
  var EXPIRATION_IN_SECONDS = 60 * 5;
  var Countdown, instances, interval, padZeros, renderInstances, start, startTimer, stopTimer, templateText;
  templateText = function(opts) {
    var text = opts.prefix;
    if(opts.lessThan1Hr){
      text += opts.minutes + ":" + opts.seconds;
    }
    else if(opts.lessThan1Day){
      text += opts.hours + ":" + opts.minutes + ":" + opts.seconds;
    }
    else {
      text += opts.days + "日";
    }
    return text + opts.postfix;
  };
  start = false;
  instances = [];
  interval = null;
  startTimer = function() {
    if (start) {
      return;
    }
    start = true;
    return interval = setInterval(renderInstances, 1000);
  };
  stopTimer = function() {
    return clearInterval(interval);
  };
  renderInstances = function() {
    var countdown, i, _i, _ref;
    for (i = _i = _ref = instances.length - 1; _i >= 0; i = _i += -1) {
      countdown = instances[i];
      countdown.update();
    }
  };
  padZeros = function(val) {
    if (val >= 10) {
      return val;
    } else {
      return '0' + val;
    }
  };
  Countdown = (function() {
    function Countdown(el) {
      var hours, minutes, parts, seconds, showHours, startTime, dateUntil;
      instances.push(this);
      this.el = $(el);

      // set options
      this.countdownAfter = this.el.data('countdown-after') ? parseInt(this.el.data('countdown-after')) * HOUR_IN_SECONDS : null; // in hours
      this.prefix = this.el.data('countdown-prefix') ? this.el.data('countdown-prefix') : "";
      this.postfix = this.el.data('countdown-postfix') ? this.el.data('countdown-postfix') : "";

      startTime = this.el.data('countdown');
      parts = startTime.split(':');

      showHours = parts.length > 2;
      if (showHours) {
        hours = Number(parts[0]);
        minutes = Number(parts[1]);
        seconds = Number(parts[2]);
      } else {
        hours = 0;
        minutes = Number(parts[0]);
        seconds = Number(parts[1]);
      }
      this.expiring = false; // expiring within 5 minutes
      this.rendered = false; // once it is rendered, mark it as rendered
      this.seconds = hours * 3600 + minutes * 60 + seconds;
      this.startCountdown();
    }

    Countdown.prototype.tick = function() {
      this.seconds -= 1;
      if (this.seconds < 0) {
        return this.seconds = 0;
      }
    };

    Countdown.prototype.update = function() {
      this.tick();

      // don't show count down if more than countdownAfter
      if(this.countdownAfter == null || (this.countdownAfter &&  this.seconds < this.countdownAfter)){
        if(!this.rendered || this.seconds < DAY_IN_SECONDS || (this.seconds % DAY_IN_SECONDS == 0) ) {

          if (this.seconds === 0) {
            this.el.trigger('countdownStopped', this.el);
            this.render();
            return this.stopCountdown();
          }

          if (!this.expiring && this.seconds < EXPIRATION_IN_SECONDS) {
            this.expiring = true;
            this.el.addClass('item-expiring');
            this.el.trigger('itemExpiringStarted', this.el);
          }

          this.render();
        }
      }
    };

    Countdown.prototype.render = function() {
      var data, o, secs;
      o = this.getTimeComponents(this.seconds);
      data = {
        days: o.days,
        hours: o.hours,
        minutes: o.hours ? padZeros(o.minutes) : o.minutes,
        seconds: padZeros(o.seconds),
        lessThan1Day: o.days < 1,
        lessThan1Hr: this.seconds < 60 * 60,
        prefix: this.prefix,
        postfix: this.postfix
      };
      this.el.text(templateText(data));
      this.rendered = true;
    };

    Countdown.prototype.getTimeComponents = function(seconds) {
      var hours, o;
      hours = Math.floor(seconds / 3600);
      o = {
        days: Math.floor(hours / 24),
        hours: hours % 24,
        minutes: Math.floor((seconds % 3600) / 60),
        seconds: Math.floor((seconds % 3600) % 60)
      };
      return o;
    };

    Countdown.prototype.startCountdown = function() {
      return startTimer();
    };

    Countdown.prototype.stopCountdown = function() {
      var ind;
      ind = _.indexOf(instances, this);
      instances.splice(ind, 1);
      if (!instances.length) {
        return stopTimer();
      }
    };

    return Countdown;

  })();
  $.fn.countdown = function() {
    return this.each(function(index, element) {
      return new Countdown(element);
    });
  };
});
