// require config.js
var jQueryPluginShim;
jQueryPluginShim = {
  deps: ['jquery'],
  exports: 'jQuery'
};
requirejs.config({
  baseUrl: '/static/js/',
  waitSeconds: 0,
  paths: {
    jquery: 'libs/jquery/jquery-1.8.2.min',
    'picturefill': 'libs/picturefill',
    'jquery.countdown': 'libs/jquery/jquery.countdown',
    'jquery.dropdown': 'libs/jquery/jquery.dropdown',
    'jquery.cookie': 'libs/jquery/jquery.cookie',
    'jquery.lazyload': 'libs/jquery/jquery.lazyload.min',
    'jquery.accordions': 'libs/jquery/jquery.accordions',
    'bootstrap-tooltip': 'libs/jquery/bootstrap-tooltip',
    'bootstrap-modal': 'libs/jquery/bootstrap-modal',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone',
    hbs: 'libs/require-handlebars-plugin/hbs'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'jquery.cookie': jQueryPluginShim,
    'jquery.lazyload': jQueryPluginShim,
    'jquery.dropdown': jQueryPluginShim,
    'jquery.accordions': jQueryPluginShim,
    'bootstrap-tooltip': jQueryPluginShim,
    'bootstrap-modal': jQueryPluginShim
  }
});
//jQuery.noConflict();

// app main function starts here
require([
  'jquery',
  'underscore',
  'backbone',
  '_utils',
  '_global',
  'picturefill',
  'pages/sale-list',
  'pages/sale-detail',
  'pages/brand',
  'pages/checkout-payment-method',
  'pages/account',
  'pages/account-returns',
  'pages/account-returnhistory',
  'pages/campaign',
  'jquery.dropdown',
  'jquery.cookie',
  'jquery.session',
  'jquery.growl',
  'jquery.countdown',
  'jquery.slidetransition',
  'jquery.lazyload',
  'jquery.accordions',
  'bootstrap-tooltip',
  'bootstrap-modal',
  'models/sales',
  'models/products',
  'models/return-item',
  'google-analytics/ctr-tracking-manager',
  'google-analytics/app-tracking',
  'google-analytics/checkout-tracking',
  'menus/category-menu',
  'menus/category-submenu',
  'menus/category-navigation',
  'menus/products-menu',
  'menus/bottom-genre-menu',
  'message-manager',
  'shopdirectory',
  'bag',
  'slick',
  'login',
  'nagbar',
  'product',
  'google-tag-manager',
  'backtotop'
  ], function($, _, Backbone) {

  $(function(){
    var start = function() {
      // hack for tapestry here
      Tapestry.pageLoaded = true;

      if(!Utils.isAdminView()){
        // define all extension
        _.extend(MP.ProductView.prototype, MP.ProductTracking);
        _.defaults(MP.ProductSelectionView.prototype, MP.ProductTracking); // using defaults so that second argument won't override the first
        _.extend(MP.ProductsMenuView.prototype, MP.ProductTracking);
        _.extend(MP.SaleListPageView.prototype, MP.SaleBannerTracking);
        _.extend(MP.CampaignPageView.prototype, MP.SaleBannerTracking);
        _.extend(MP.BottomGenreMenu.prototype, MP.SaleBannerTracking);
        _.extend(MP.CategoryNavigation.prototype, MP.SaleBannerTracking);
        _.extend(MP.SalesMenuView.prototype, MP.SaleBannerTracking);
        new MP.AppTracking(); // should be instanciated before GRM Helper
        new MP.CtrTrackingManager({el: 'body'}).render();
        new MP.GTMHelper().render();
        if( Utils.hasPageClass('page-checkout')){
          new MP.CheckoutTracking({el: Utils.$body.find('#main')});
        }
      }

      Utils.$window.on("beforeunload", function(ev) {
        MP.dispatcher.trigger('pageUnload', ev);
      });

      $('[data-countdown]').countdown();
      $('img.lazyload').lazyload({threshold: 100});

      var $saleCode = $('#sale-code');
      var saleId = ($saleCode.length > 0) ? $saleCode.val() : null;
      new MP.CategoryNavigation({el: '#shop-menu', saleId: saleId}).render();

      $('.modal.dialog').modal('show');

      // this login window should be instantiated before any page renders
      if($('.login-signup').length > 0) {
        // if the login is in product page, the modal dialog opens
        new MP.LoginView({
          el: '.login-signup',
          modal: !(Utils.hasPageClass('page-login') || Utils.hasPageClass('page-signup')),
          initialMode: ((window.location.hash.indexOf('login') > 0) ? 'login' : 'signup')
        }).render();
      }

      if(Utils.hasPageClass('page-saleproductdetail')) {
        // Get the available sizes
        var sizes = []
        $('#variantSelect option').each(function(i, opt){
          var $opt = $(opt);
          var label = $opt.text().split('(')[0]; // to remove (販売終了) after the size
          var value = $opt.attr('value');
          // Exclude empty or "F"ree size product
          if(value.length > 0 && label != "F") {
            sizes.push({
              label: label,
              value: value,
              disabled: $opt.attr('disabled')
            });
          }
        });
          // Instanciate the product view
        new MP.ProductView({el: 'body', sizes: sizes}).render();
        MP.dispatcher.trigger('productDetailPageRendered');
      }

      if( Utils.hasPageClass('page-salelist') ) {
          new MP.SaleListPageView({el: 'body'}).render();
      }

      if(Utils.hasPageClass('page-saledetail')){
        new MP.SaleDetailPageView({el: 'body'}).render();
      }

      // campaign pages----------------------------------------
      if( Utils.hasPageClass('page-campaign')){
        new MP.CampaignPageView({el: 'body'}).render();
      }
      // ------------------------------------------------------

      // for all pages
      new MP.BagView({el: $('.site-header .shopping-bag')}).render();
      new MP.BackToTop({el: $('#backtotop')});


      if(!Utils.isAdminView()){
        new MP.MessageManager().render();
      }

      $('.account > a').dropdown({
        animate: true
      });

      if( Utils.hasPageClass('page-shopcheckoutpaymentmethodfinal') ) {
        new MP.CheckoutPaymentPageView({el: 'body'}).render();
      }

      if( Utils.hasPageClass('page-shopbasket')) {
        $('#couponNoFieldRadio').keydown(function() {
          $('#radio_2').prop('checked', true);
        });
      }

      if( Utils.hasPageClass('page-shopcheckoutconfirmation')){
        // init genre menu at the bottom
        new MP.BottomGenreMenu({el: '#current-sales'}).render();
      }


      if(Utils.hasPageClass('page-accountreturns')) {
        new MP.AccountReturnView({el: '.account-main'}).render();
      }

      if(Utils.hasPageClass('page-accountreturnhistory')){
        new MP.AccountReturnHistoryView({el: '.account-main'}).render({page: 1});
      }

      // account pages
      if(Utils.hasPageClass('page-accountmail') ) {
        new MP.AccountMailView({el: 'body'}).render();
      }

      if(Utils.hasPageClass('page-accountchangepassword') ) {
        new MP.AccountChangePasswordView({el: '.account-main'}).render();
      }

      if(Utils.hasPageClass('page-accountpersonaldata') ) {
        new MP.AccountPersonalDataView({el: '.account-main'}).render();
      }

      if( Utils.hasPageClass('page-accountinvitefriends')) {
        new MP.AccountInviteFriends({el: 'body'}).render();
      }

      if(Utils.hasPageClass('page-shopcheckoutpaymentmethod') ||  Utils.hasPageClass('page-shopcheckoutorderdetails') ) {
        new MP.PaymentFormView({el: '.payment-form'});
      }

      if(Utils.$body.find('.form-address').length > 0){
        new MP.AddressFormView({el: '.form-address'});
      }

      if( Utils.hasPageClass('page-branddetail') ) {
        new MP.BrandPageView({el: 'body'}).render();
      }

      if($('.nagbar').length > 0) {
        new MP.NagBarView({
          el: '.nagbar'
        }).render();
      }


      // if item added to bag is flagged in the page, open the bag contents and highlight it
      // This needs to be triggered after the shopping cart tracking is initialized
      if ($('#item-added-bag').val() == 'true') {
        MP.dispatcher.trigger('itemAdded');
      }

      // initialize all accordions
      $('.accordions').accordion();

      initDatePicker(); // date pickers for upcoming sales
      initAccountMenu();
      initFreeShippingCampaign();
    };

    var initDatePicker = function(){
      // enable slide behavior on mobile
      if(Utils.MediaQuery.isMobile()){
        $('.sales-date-picker').slick({
          arrows: false,
          swipeToSlide: true,
          slidesToShow: 5,
          infinite: false
        });
      }

      $('.sales-date-picker .start-date').on('click', function() {
        $('.future-campaigns .sale-list-upcoming li').hide();
        $('.sales-date-picker .start-date').removeClass('selected');
        $(this).addClass('selected');
        var startDate = $(this).data('date');
        $('.future-campaigns .sale-list-upcoming .start-' + startDate).show();
        // make sure lazy loaded sale banner images are loaded
        Utils.$window.trigger('resize');
      });
    };

    var windowScrollTop = Utils.$window.scrollTop();
    var initAccountMenu = function() {
      $('#account-menu').on('click', function(){
        if(Utils.$body.hasClass('menu-open')){
          Utils.$window.scrollTop(windowScrollTop);
        }
        else {
          windowScrollTop = Utils.$window.scrollTop();
        }
        $('body').toggleClass('menu-open');
      });
      // if the overlay is clicked the account menu should close
      $('.overlay').on('click', function(){
        $('body').removeClass('menu-open');
        Utils.$window.scrollTop(windowScrollTop);
      });

      // Register sliding collapse behavior for sub menu
      $('#account-menu-pane .menu-group-header').on('click', function(ev){
          var $container = $(ev.target).next('.slider-container');

          if (!$container.hasClass("height-transition-hidden")){
            setTimeout(function () {
              $container.slideUpTransition();
            },20);
          }
          else {
             // have to delay for element to register in place
            setTimeout(function () {
                $container.slideDownTransition();
            },20);
          }
      });
    };

    var initFreeShippingCampaign = function(){
      MP.dispatcher.on('freeshippingCountdown', function(phase){
        if(phase == 'expired'){
          $('.freeshipping').remove();
        }
      });
    };

    start();
    MP.dispatcher.trigger('shopJsRendered');
  });
  if(domLoaded){
    $(document).ready();
  }
});
