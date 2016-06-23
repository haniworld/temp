require(['jquery', 'underscore', 'backbone', '_utils', 'google-tag-manager'], function($, _, Backbone) {
	MP.MessageManager = Backbone.View.extend({
		el: 'body',
		MaxMessageDisplayCount: 3,

		FreeShippingExpiringMessage: "送料無料時間が間もなく終了！",
		FreeShippingExpiredMessage: "送料無料時間が終了しました。",

		initialize: function(){
			this.$accountMenuSwitch = this.$('#account-menu');
			this.$loginLink = this.$('.login-menu .login-link');
			MP.dispatcher.on('basketExpiring', this.showBasketExpiringGrowl, this);
			MP.dispatcher.on('basketExpired', this.showBasketExpiredGrowl, this);
			MP.dispatcher.on('freeshippingCountdown', this.showFreeShippingGrowl, this);
			MP.dispatcher.on('signupSuccess', this.setNewMember, this);
			MP.dispatcher.on('showGrowlMessage', this.showGrowlMessage, this);
		},

		render: function() {
			this.showWelcomeNewMember();

			// hack for the server error problem.  Clean out all the old session keys
			if(!Utils.MediaQuery.isIE8()){
				$.session.purgeAll('welcome', $.session._id.toString());
				$.session.purgeAll('encourage-login', $.session._id.toString());
			}

			this.showPresaleMessage();

			if(this.$loginLink.length > 0 && Utils.hasPageClass('page-saledetail')){
				this.initMemberOnlySaleTooltip();
			}

			this.initCampaignHeader();

			return this;
		},

		setNewMember: function(opts) {
			this.setCookie('mp-modal-signup', opts.formTrigger);
		},

		showWelcomeNewMember: function(){
			var $quickLogin = this.$('#quicklogin');
			var newSignupMode = $.cookie('mp-modal-signup') || $.cookie('mp-oauth-signup');
			if($quickLogin.length > 0 && newSignupMode){
				$quickLogin.modal();
				// remove the cookie
				this.deleteCookie('mp-modal-signup');
				this.deleteCookie('mp-oauth-signup');
				// send tracker
				MP.dispatcher.trigger('registrationSuccess', {formTrigger: newSignupMode});
			}
		},

		showBasketExpiringGrowl: function(){
			this.showGrowlMessage("お取り置き時間が間もなく終了！<br/>バッグが空になります。");
		},

		showBasketExpiredGrowl: function(){
			this.showGrowlMessage("お取り置き時間が終了しました。");
		},

		showFreeShippingGrowl: function(phase){
			var msg = (phase == 'expiring' ? this.FreeShippingExpiringMessage : this.FreeShippingExpiredMessage);
			this.showGrowlMessage(msg);
		},

		showGrowlMessage: function(msg, container){
			$.growl({ container: (container || '#main'), title: "", message: msg });
		},

		initMemberOnlySaleTooltip: function(){
			if(this.$('.members-only').length > 0 && $.cookie('membersonly', { path: '/' }) != 'true' ){
				var $membersonlyTooltip = this.$('.members-only').first();
				$membersonlyTooltip.tooltip({
					placement: 'bottom',
					trigger: 'manual',
					title: "正規ブランドとオフィシャルなパートナーシップを結び、直接取引によって、\
							プライスダウンを実現しています。<br/>\
							<br/>\
							会員さまだけに特別価格でご紹介することを条件に各ブランドと\
							価格交渉をしているため、特別価格の公開は、会員さまだけに限定しております。\
							（また、メーカー希望小売価格と、ミレポルテだけの特別価格を公正に表示しております。）<br/>\
							<br/>\
							ミレポルテだけの特別価格のセールをチェックするには、\
							<a href='#' class='go-to-signup'>会員登録</a>の上、<a href='#' class='go-to-login'>ログイン</a>を！",
					html: true,
					template: '<div class="tooltip tooltip-message tooltip-memberonly">\
							<div class="tooltip-arrow"></div>\
							<div class="tooltip-close"><span class="glyphicon glyphicon-remove"></span></div>\
							<div class="tooltip-title">価格を表示しない理由</div>\
							<div class="tooltip-inner"></div>\
							</div>'
				});

				$membersonlyTooltip.tooltip('show');
				// we need to adjust the position based on the screensize, so removing the javascript positioning by bootstrap tooltip
				var $tooltip = $('.tooltip-memberonly');
				$tooltip.attr('style', '');
				$tooltip.find('.tooltip-close').on('click', _.bind(function(){
					$membersonlyTooltip.tooltip('hide');
					$.cookie('membersonly', 'true', {path: '/' });
				}, this));
			}
		},

		initCampaignHeader: function(){
			var $campaignHeader = $('.closeable-campaign-header ');
			if($campaignHeader.length > 0){
				if(this.getMessageCount('campaign') >= 3){
					$campaignHeader.hide();
				}
				else {
					$campaignHeader.show();
					$('.freeshipping-link').one('click', _.bind(function(){
						this.incrementMessageCount('campaign', this.MaxMessageDisplayCount);
					}, this));
					$campaignHeader.find('.btn-close').one('click', _.bind(function(){
						$campaignHeader.hide();
						this.incrementMessageCount('campaign', this.MaxMessageDisplayCount);
					}, this));
				}
			}
		},

		showPresaleMessage: function(){
			if(!this.initDinersPresaleTooltip()){
				this.initPresaleTooltip();
			}
		},

		// Assumption:
		// No diners presales are on at the same time
		// The next diners presale starts at least after 3 days
		initDinersPresaleTooltip: function() {
			var $diners = this.$('#account-menu-pane .specials a.diners');
			if($diners.length > 0){
				var showMessage = false;
				var presaleIds = [];

				// Check if the tooltip is already displayed and closed by the user
				if(this.getPresaleCookie('diners') !== 'true'){
					this.$accountMenuSwitch.tooltip({
						placement: 'bottom',
						trigger: 'manual',
						title: "Diners メンバーのお客様だけに先行セールのお知らせです。時間限定のセールなので、早めにアクセスを！\
							<br/>メニューを開き、「SPECIALS」内の「Diners 先行セール」をセレクト。",
						html: true,
						template: '<div class="tooltip tooltip-message tooltip-presales-message">\
							<div class="tooltip-arrow"></div>\
							<div class="tooltip-close"><span class="glyphicon glyphicon-remove"></span></div>\
							<div class="tooltip-title">スペシャルセールの<span class="nobreak">お知らせ！</span></div>\
							<div class="tooltip-inner"></div>\
							</div>'
					});

					this.$accountMenuSwitch.tooltip('show');
					// we need to adjust the position based on the screensize, so removing the javascript positioning by bootstrap tooltip
					var $presaleTooltip = $('.tooltip-presales-message');
					$presaleTooltip.attr('style', '');
					$presaleTooltip.find('.tooltip-close').one('click', _.bind(function(){
						this.$accountMenuSwitch.tooltip('hide');
						this.markPresales(['diners']);
					}, this));
					this.$accountMenuSwitch.one('click', _.bind(function(){
						this.$accountMenuSwitch.tooltip('hide');
						this.markPresales(['diners']);
					}, this));
				} // end showMessage
				return true;
			}
			return false;
		},

		// Presale tooltip are displayed up to "MaxMessageDisplayCount" times if the user continues browsing the site without
		// closing the tooltip.  If the user either click on the menu or close the tooltip by clicking on the close button,
		// the display count is automatically max out, so the tooltip won't be displayed again.
		initPresaleTooltip: function() {
			var $presales = this.$('#account-menu-pane .specials a.presale');

			// show only when presale is available AND on the pages where the shopping bag appears in header
			if($presales.length > 0 && $('#header .shopping-bag').length > 0) {
				var showMessage = false;
				var presaleIds = [];
				// check for new presales
				$presales.each(_.bind(function(index, ps){
					var saleId = $(ps).data('id');
					// check if the new presale has started
					if(this.getPresaleCookie(saleId) !== 'true'){
						presaleIds.push(saleId);
						showMessage = true;
					}
				}, this));

				// Don't show this tooltip more than 3 times
				if(showMessage && this.getMessageCount('presale') <= this.MaxMessageDisplayCount){
					this.$accountMenuSwitch.tooltip({
						placement: 'bottom',
						trigger: 'manual',
						title: "あなただけに先行セール情報をお届けします。時間限定セールなので、早めにアクセスを！\
							<br/>メニューを開き、「SPECIALS」内の「先行セール」をセレクト。",
						html: true,
						template: '<div class="tooltip tooltip-message tooltip-presales-message">\
							<div class="tooltip-arrow"></div>\
							<div class="tooltip-close"><span class="glyphicon glyphicon-remove"></span></div>\
							<div class="tooltip-title">スペシャルセールの<span class="nobreak">お知らせ！</span></div>\
							<div class="tooltip-inner"></div>\
							</div>'
					});

					this.$accountMenuSwitch.tooltip('show');

					this.incrementMessageCount('presale'); // count how many times the tooltip is shown
					MP.dispatcher.trigger('PresaleTooltipShown', this.getMessageCount('presale'));

					// we need to adjust the position based on the screensize, so removing the javascript positioning by bootstrap tooltip
					var $presaleTooltip = $('.tooltip-presales-message');
					$presaleTooltip.attr('style', '');
					$presaleTooltip.find('.tooltip-close').one('click', _.bind(function(){
						this.$accountMenuSwitch.tooltip('hide');
						MP.dispatcher.trigger('PresaleTooltipHidden', 'menuClicked', this.getMessageCount('presale'));
						this.incrementMessageCount('presale', this.MaxMessageDisplayCount);
						this.markPresales(presaleIds);
					}, this));
					this.$accountMenuSwitch.one('click', _.bind(function(){
						this.$accountMenuSwitch.tooltip('hide');
						MP.dispatcher.trigger('PresaleTooltipHidden', 'closeClicked', this.getMessageCount('presale'));
						this.incrementMessageCount('presale', this.MaxMessageDisplayCount);
						this.markPresales(presaleIds);
					}, this));
				} // end showMessage
			}
		},

		deleteCookie: function(name){
			$.cookie(name, null, { path: '/', expires: 'Thu, 01-Jan-70 00:00:01 GMT;' });
		},

		setCookie: function(name, value){
			$.cookie(name, value, { path: '/'});
		},

		markPresales: function(saleIds) {
			saleIds.each(function(saleId){
				$.cookie('presale-' + saleId, 'true', { expires: 1, path: '/' });
			});
		},

		getPresaleCookie: function(saleId) {
			return $.cookie('presale-' + saleId, { path: '/' });
		},

		incrementMessageCount: function(name, count) {
			var messageName = 'message-' + name;
			var count = count ? count : this.getMessageCount(name);

			$.cookie('message-' + name, ++count, { expires: 1, path: '/' });
		},

		getMessageCount: function(name){
			var messageName = 'message-' + name;
			return $.cookie(messageName) == null ? 0 : parseInt($.cookie(messageName));
		}
	});
});
