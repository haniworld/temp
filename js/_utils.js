require(['jquery'], function($) {

	Utils = {};

	Utils.MediaQuery = {
		SCREEN_WIDTH_SMALL: 568,
		SCREEN_WIDTH_MEDIUM: 720,
		SCREEN_WIDTH_LARGE: 1010,
		SCREEN_WIDTH_XLARGE: 1400  // in px
	};

	$(function(){
		Utils.$window = $(window);
		Utils.$html = $('html');
		Utils.$body = Utils.$html.find('body');

		Utils.MediaQuery.getViewportWidth = function() {
			return Math.max(document.documentElement.clientWidth,
				window.innerWidth || 0);
		};

		Utils.MediaQuery.isMobile = function() {
			return (Utils.MediaQuery.getViewportWidth() < Utils.MediaQuery.SCREEN_WIDTH_MEDIUM);
		};

		Utils.MediaQuery.isDesktop = function() {
			return (Utils.MediaQuery.getViewportWidth() >= Utils.MediaQuery.SCREEN_WIDTH_LARGE);
		};

		Utils.MediaQuery.isTouchScreen = function() {
			return Utils.$html.hasClass('touch');
		};

		Utils.MediaQuery.isIE8 = function() {
			return Utils.$html.hasClass('ie8');
		};

		Utils.MediaQuery.isIE9 = function() {
			return Utils.$html.hasClass('ie9');
		};

		// detect IEs less than version 10
		Utils.MediaQuery.isOldIEs = function() {
			return (Utils.MediaQuery.isIE9() || Utils.MediaQuery.isIE8());
		};

		Utils.MediaQuery.isIE = function(){
			return Utils.$html.hasClass('ie');
		};

		Utils.MediaQuery.isIOS8Up = function(){
			var deviceAgent = navigator.userAgent.toLowerCase();
			return /(iphone|ipod|ipad).* os (8|9|10|11)_/.test(deviceAgent);
		};

		Utils.MediaQuery.isFirefox = function() {
			return Utils.$html.hasClass('firefox');
		};

		Utils.MediaQuery.isApp = function(){
			return Utils.$html.hasClass('app');
		};

		Utils.isAdminView = function() {
			return Utils.$body.hasClass('admin');
		};

		Utils.hasPageClass = function(pageClass) {
			return Utils.$body.hasClass(pageClass);
		};

		Utils.isUserLoggedin = function() {
			return Utils.$body.hasClass('logged-in');
		};

		Utils.trackerBlocked = function(){
			return !(window.ga && ga.create);
		};

		Utils.windowScrollBottom = function(){
			return Utils.$window.scrollTop() + Utils.$window.height();
		};

		Utils.reloadWindow = function(){
			window.location.reload(true);
		};

		Utils.scrollBodyTo = function(posTop, duration, complete) {
			var headerFixed = Utils.$body.find('#header').css('position') === "fixed";

			duration = duration ? duration : 600;
			if(headerFixed){
				posTop = posTop - Utils.$body.find('#header .site-header').height() - 50;
			}
			$('body, html').animate({
				'scrollTop': posTop - 50
			}, duration, complete);
		};

		Utils.getReferrerPathname = function(){
			var a=document.createElement('a');
			a.href=document.referrer;
			var pathname = '';
			if(typeof(document.referrer) && 'undefined' && document.referrer != null && document.referrer != '') {
				pathname = a.pathname;
			}
			a='';
			return pathname;
		};
	});

});