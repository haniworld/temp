require([
	'jquery',
	'underscore',
	'backbone',
	'slidingpane',
	'slick',
	'jquery.jqzoom',
	'_utils',
	'google-analytics/product-tracking'
], function($, _, Backbone) {
	MP.ProductViewBase = Backbone.View.extend({

		defaults: {
			itemDescriptionMinHeight: '5.2em'
		},

		initialize: function(opts) {

			this.isMobile = opts.isMobile;
			this.sizes = opts.sizes;

			this.templateThumbnail = _.template(
				'<li data-index="<%= index %>">\
					<img src="<%= imgSrc %>" />\
				</li>'
			);

			this.templateMaginifiedImageContainer = _.template('<div class="magnified-image-container"></div>');

			this.templateSizeItem = _.template(
				'<div class="size">\
					<a href="javascript:void(0)" class="<%= disabled %>" data-value="<%= value %>">\
							<%= label %>\
					</a>\
				</div>'
			);

			MP.dispatcher.on('loginSuccess', this.addToCart, this);
			MP.dispatcher.on('signupSuccess', this.addToCart, this);
		},

		render: function() {
			// Set the default value for size
			this.$variant = this.$('#variantSelect');
			this.$variant.val('');

			this.$quantity = this.$('#amountSelect');
			this.$quantity.val(1);

			this.$thumbnails = this.$('.product-thumbnails');

			this.$itemDescription = this.$('.item-description');

			this.productId = this.$('#product-id').val(),
			// get the sale genre for this product
			this.productGenres = this.$('[data-sale-genres]').data('sale-genres');
			this.saleCode = this.$('#sale-code').val(); // get the sale code of this product

			if(!Utils.isAdminView()){
				this.$('.size-guide a').trigger('click');
				// open the closed pane by default dependin on the genre
				if(this.productGenres == "GOURMET" || this.productGenres == "LIFESTYLE"){
				this.$('.product-description-others a.product-detail-title').trigger('click');
				}
				else {
					this.$('.brand-info a.product-detail-title').trigger('click');
				}
			}

			// modify the href for back navigation button (to sale detail page)
			var urlToSaleDetailPage = this.$('.show-sale-detail-link a').attr('href');
			this.$('.show-sale-detail-link a').attr('href', urlToSaleDetailPage + "#prod-" + this.productId);

			// render product pictures
			this.renderGallery();

			// show errors/warnings
			var $alcoholWarning = this.$('#alcohol-warning-dialog');
			if ($alcoholWarning.length > 0) {
				$alcoholWarning.modal('show');
			}
			var $alcoholError = this.$('#alcohol-error-dialog');
			if($alcoholError.length > 0) {
				$alcoholError.modal('show');
			}

			var $waitinglistDialog = this.$('#waitinglist-dialog');
			if($waitinglistDialog.length > 0) {
				$('.waiting-list').click(function(event){
					event.preventDefault()
					$waitinglistDialog.modal('show')
				});
			}

			// if the user is underage, don't do any of the actions.
			if(this.$variant.length <=0){
				return this;
			}

			// hide the additional message if the adding to cart fails on signup
			if( this.$('#item-added-bag').val() == 'false' && this.$('#quicklogin.thankyou-signup').length > 0) {
				this.$('#quicklogin.thankyou-signup .additional-message').hide();
			}


			// render size if there are more than one size and sizeGuide is available
			if(this.sizes.length > 0) {
				var sizeItemTemplates = _.map(this.sizes, _.bind(function(size) {
					return this.templateSizeItem(size);
				}, this));
				this.$('.size-selector').html(sizeItemTemplates);
				// if only one size is available, select that size by default
				if(this.$('.size').length == 1) {
					this.$('.size a').trigger('click');
				}
			}
			else {
				if(this.$variant.length > 0){
					// if not size guide is available, select the default size
					// and remove the size selector display all together
					this.$variant[0].selectedIndex = 1;
					// Remove the size section all together if no sizes or sizeguide is present
					if(this.$('.size-guide-display-content p').text().length <= 0){
						this.$('.variant').remove();
					}
				}
			}

			// show tooltips for disalbed size
			this.$('.size-selector a.disabled').tooltip({
				placement: 'top',
				title: "販売終了"
			});

			this.itemDescriptionHeight = this.$('.item-description-content').outerHeight();
			this.$('.item-description-content').addClass('height-transition-hidden');

			this.initProductsMenu();	// display product menu on top for mobile devices

		},

		initProductsMenu: function() {
			if(Utils.MediaQuery.isMobile()) {
				var obj = this;

				new MP.Products({saleCode: this.saleCode}).fetch({
					success: function(products) {
						new MP.ProductsMenuView({
							el: obj.$('#products-nav'),
							collection: products,
							productId: obj.productId,
							productGenres: obj.productGenres,
							saleCode: obj.saleCode
						}).render();
					}
				});
			}
		},

		renderGallery: function(){
			this.$productGallery = this.$('.product-gallery .slides');

			this.$productGallery.slick({
				dots: false,
				lazyLoad: 'ondemand',
				responsive: [
						{
							breakpoint: Utils.MediaQuery.SCREEN_WIDTH_LARGE,
							settings: {
								dots: true,
								lazyLoad: 'ondemand'
							}
						}]
			});

			var initImageZoom = _.bind(function(){

				this.$galleryImages = this.$productGallery.find('.gallery-image');

				// As soon as the zoom starts, disable the slick sliding behavior
					this.$galleryImages.on('zoomActivated', _.bind(function(e, zoomElem){
						this.$productGallery.slick('slickSetOption', 'swipe', false);
						this.$productGallery.addClass('hasZoomActivated');
						$(zoomElem).closest('.product-gallery-image').addClass('zoom-active');
					}, this));

					this.$galleryImages.on('zoomDeactivated', _.bind(function(e, zoomElem){
						this.$productGallery.slick('slickSetOption', 'swipe', true);
						this.$productGallery.removeClass('hasZoomActivated');
						$(zoomElem).closest('.product-gallery-image').removeClass('zoom-active');
					}, this));

					this.$galleryImages.jqzoom({
						zoomType: 'innerzoom',
						preloadImages: false,
						preloadText: "",
						alwaysOn: false,
						touch: Utils.MediaQuery.isTouchScreen(),
						touchToActivate: Utils.MediaQuery.isTouchScreen(),
						zoomTrigger: Utils.MediaQuery.isTouchScreen() ? '.zoom-activate' : null
					});
			}, this);

			initImageZoom();
			this.$productGallery.on('init', initImageZoom);

			// Register thumbnail select event on slide
			this.$productGallery.on('afterChange', _.bind(function(ev, slider) {
				this.selectThumbnail(this.$thumbnails.find('li[data-index=' + slider.currentSlide + ']'));
				// deactivate any active zoom whenever the slide change
				$.jqzoom.deactivateAll(this.$galleryImages);
			}, this));

			// Read the rendered product gallery images, render thumbnail pictures on the side
			if (!Utils.MediaQuery.isMobile()) {
				var thumbnails = this.$('.product-gallery li[data-thumb]').map(_.bind(function(index, thumbnail){
					return $(this.templateThumbnail(
						{
								imgSrc: $(thumbnail).data('thumb'),
								index: index -1
						}))[0];
				}, this));
				// remove the first and last thumbnail (becuase it is redundant)
				thumbnails.splice(0, 1);
				thumbnails.splice(thumbnails.length -1, 1);
				this.$thumbnails.append(thumbnails);

				this.thumbnailSlicked = false;

				// If the thumbnail is more than 4, make it a vertical slider
				if(thumbnails.length > 4) {
					this.$thumbnails.slick({
						vertical: true,
						verticalSwiping: true,
						infinite: false,
						slidesToShow: 4,
						slidesToScroll: 1,
						arrows: true,
						dots: false,
						slide: 'li',
						appendArrows: ".thumbnails-nav"
					});
					this.thumbnailSlicked = true;
				}

				// Select the first thumbnail
				this.selectThumbnail(this.$thumbnails.find('li:first'));
			}
		},

		thumbnailClicked: function(ev) {
			var $thumbnailElem = $(ev.target).closest('li');

			this.selectThumbnail($thumbnailElem);

			// move to the selected picture
			var index = $thumbnailElem.data("index");
			this.$productGallery.slick('slickGoTo', index);

			MP.dispatcher.trigger('productDetailElementClicked', ev, 'Thumbnail');
		},

		selectThumbnail: function($thumbnail) {
			// highlight the selected thumbnail
			this.$thumbnails.find('li').removeClass('selected');
			$thumbnail.addClass('selected');

			// make sure the thumbnail to be visible is if it's slicked
			if(this.thumbnailSlicked){
				this.$thumbnails.slick('slickGoTo', $thumbnail.data('slick-index'));
			}
		},

		toggleTruncateItemDescription: function(ev){
			ev.preventDefault();
			var $target = this.$(ev.target);
			var $itemDesc = this.$('.item-description .item-description-content');

			if ($itemDesc.hasClass("height-transition-hidden")){
				$itemDesc.slideDownTransition(this.defaults.itemDescriptionMinHeight, this.itemDescriptionHeight );
				this.$('.item-description').toggleClass('open');
				MP.dispatcher.trigger('productDetailElementClicked', ev, 'ReadMore');
			}
			else{
					$itemDesc.slideUpTransition(this.defaults.itemDescriptionMinHeight);
					setTimeout(_.bind(function(){
						this.$('.item-description').toggleClass('open');
					}, this), 500);
			}
		},

		sizeChanged: function(ev) {
			ev.preventDefault();
			var $size = this.$(ev.target);
			// toggle selected class
			this.$('.size-selector .size').removeClass('selected');
			$size.closest('.size').addClass('selected')

			this.$variant.val($size.data('value'));
		},

		showSlideModal: function($content) {
			$('body').scrollTop(0); // make sure the body is top
			$content.slidingpane('show');
		},

		toggleSizeGuide: function(ev) {
			ev.preventDefault();
			var $target = this.$(ev.target);
			var $sizeGuide = this.$('.size-guide-display');
			 if ($sizeGuide.hasClass("height-transition-hidden")) {
						$sizeGuide.slideDownTransition();
						MP.dispatcher.trigger('productDetailElementClicked', ev, 'SizeGuide');
				}
				else {
						$sizeGuide.slideUpTransition();
				}
			$target.toggleClass('isActive');
		},

		toggleProductDetail: function(ev) {
			ev.preventDefault();
			var $target = this.$(ev.target);
			var $prodDetail = $target.next();
			if ($prodDetail.hasClass("height-transition-hidden")) {
					$prodDetail.slideDownTransition();
					MP.dispatcher.trigger('productDetailElementClicked', ev, 'ProductDetail$' + $target.closest('.product-detail').attr('class'));
			}
			else {
					$prodDetail.slideUpTransition();
			}
			$target.toggleClass('open');
		},

		showQuickSignup: function(ev) {
			ev.preventDefault();
			var $target = this.$(ev.target);
			var trigger;
			if($target.closest('.prices').length > 0){
				trigger = "HiddenPrice";
			}
			else {
			trigger = $target.data('trigger');
			}
			MP.dispatcher.trigger('quickLoginOpen', 'signup', trigger);
		},

		showQuickLogin: function(ev) {
			ev.preventDefault();
			var trigger = this.$(ev.target).closest('.prices').length > 0 ? "HiddenPrice" : "AddCart";
			MP.dispatcher.trigger('quickLoginOpen', 'login', trigger);
		},

		addToCart: function(ev) {
			try {
				ev.preventDefault();
			}
			catch(er){}
			if(ev.token){
				// if the token is passed.	Add url parameter to shopping form
				this.$('#shoppingform').append('<input name="token" type="hidden" value="' + ev.token + '"/>');
			}
			this.$('#submitShoppingForm').trigger('click');
		}
	});

	MP.ProductView = MP.ProductViewBase.extend({
		events: {
			'click .product-thumbnails li': 'thumbnailClicked',
			'click .read-more': 'toggleTruncateItemDescription',
			'click .size-selector a:not(.disabled)': 'sizeChanged',
			'click .size-guide a': 'toggleSizeGuide',
			'click .go-to-signup': "showQuickSignup",
			'click .go-to-login': "showQuickLogin",
			'click .add-to-cart': "addToCart",
			'click a.product-detail-title': 'toggleProductDetail',
			'imageLoaded .related-products img.prod-img': "prodImageLoaded",
			'click a.related-product' : 'prodClicked'
		},

		initialize: function(opts){
			MP.ProductViewBase.prototype.initialize.call(this, opts);
		}
	});

});