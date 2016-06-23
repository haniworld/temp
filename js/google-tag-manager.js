// Helpers for google tag manager

require(['jquery', 'underscore', 'backbone', '_global'], function($, _, Backbone) {
	MP.GTMHelper = Backbone.View.extend({

		initialize: function(){
			MP.dispatcher.on('quickLoginOpen', this.quickLoginOpen);
			MP.dispatcher.on('registrationSuccess', this.registrationSuccessTrigger);
			MP.dispatcher.on('loginSuccess', this.loginSuccessTrigger);
			MP.dispatcher.on('userEnter', this.UserEnterTrigger);
			MP.dispatcher.on('shopJsRendered', this.shopJsRendered);
		},

		render: function(){
			/* ---------------------------------------------
			/* CRITEO tags - page based
			/* FACEBOOK Retargetting (for order confirmation only)
			/* ---------------------------------------------*/
			// Home page - commenting out this bit, because there's no home page anymore.  You may need to uncomment if criteo complains
			// if( Utils.hasPageClass('page-home') ){
			// 	dataLayer.push({
			// 		'customerId': accountId
			// 	});
			// }
			// Sale list page
			if( Utils.hasPageClass('page-saledetail') ){
				var products = _.toArray($('#product-list .product-block:lt(3)').map(function(){
						return String($(this).data('product'));
					}));
				dataLayer.push({
					'customerId': accountId,
					'productIds': products,
					'isSaleCurrent': isSaleCurrent
				});
			}
			// Product detail page
			if( Utils.hasPageClass('page-saleproductdetail') ){
				var productId = $('#product-id').val(),
					productName = $('.product-name-info .product-title').text(),
					productPrice = $('.priceshop').data('price'),
					brandName = $('.product-name-info .brand-name').text();

				dataLayer.push({
					'customerId': accountId,
					'productId': productId,
					'brandName': brandName,
					'productName': productName,
					'productPrice': productPrice,
				});
				if($('#item-added-bag') !== 'true'){
					// for GA ecommerce.  so that the page detail won't get the hit twice for adding to cart
					dataLayer.push({
						'event': 'productDetailView',
						'ecommerce': {
							'detail': {
								'actionField': {'list': 'Sale Detail Page'},
								'products': [{
									'name': productName,
									'id': productId,
									'price': productPrice,
									'brand': $('#sale-code').val(),
									'category': $('[data-sale-genres]').data('sale-genres')
								}]
							}
						}
					});
				}
			}

			// Basket page tag
			if( Utils.hasPageClass('page-shopbasket') ){
				var $shoppingBasket = $('#shoppingbasket');
				// if the bag is empty don't fire the tag
				if( $shoppingBasket.find('td.empty').length <= 0 ){
					var items = []; // for criteo tag
					var productIds = []; // for criteo tag
					var gaProducts = []; // for GA tag

					$shoppingBasket.find('tbody tr').each(function(index, elem){
						var $elem = $(elem);
						var id = $elem.data('product-id'),
							price = parseInt($elem.find('.unit-price').data('unit-price')),
							quantity = parseInt($elem.find('.quantity select').val());

						items.push({
							id: id,
							price: price,
							quantity: quantity
						});
						productIds.push(id);

						// for GA Ecommerce
						gaProducts.push({
							'name': $elem.find('.product-name .name').data('product-name'),
							'id': id,
							'price': price,
							'brand': $elem.data('sale-code'),
							'category': $elem.data('prod-category'),
							'variant': $elem.find('.size').text(),
							'quantity': quantity
						});
					});

					dataLayer.push({
						'customerId': accountId,
						'cartItems': items,
						'productIds': productIds,
						'totalAmount': $('.total').data('total'),
					});

					// GA Internal - Enhanced Ecommerce tracking
					// track checkout pages step1 - basket page reached
					dataLayer.push({
						'event': 'checkout',
						'ecommerce': {
							'checkout': {
								'actionField': {'step': 1},
								'products': gaProducts
							}
						}
					});
				}
			}

			// Order confirmation page
			if( Utils.hasPageClass('page-shopcheckoutconfirmation')){
				MP.dispatcher.trigger('checkoutSuccess');
				dataLayer.push({
					'customerId': accountId,
					'transactionId': criteoTrackerOrderId,
					'newCustomer': criteoTrackerNewCustomer,
					'cartItems': criteoTrackerItems,
					'productIds': productIds,
					'amountTotal': $('#productAmountAsString').val()
				});
			}

			if( Utils.hasPageClass('page-signupsuccess')){
				MP.dispatcher.trigger('signupSuccessPage');
			}
		},
		// for making sure all tags are fired after shop.js is loaded
		shopJsRendered: function(){
			dataLayer.push({
				'event': 'shopJsRendered'
			});
		},

		quickLoginOpen: function(mode, action) {
			dataLayer.push({
				'event': 'modalOpen',
				'modalMode': mode,
				'formTrigger': action
			});
		},

		registrationSuccessTrigger: function(opts) {
			// remove the token from the url
			var trackUrl = location.href.replace(/([?]|&)token=.*$/g, '');
			dataLayer.push({
				'event': 'signupSuccessful',
				'formTrigger': opts.formTrigger,
				'trackUrl': trackUrl
			});
		},

		loginSuccessTrigger: function(opts) {
			dataLayer.push({
				'event': 'loginSuccessful',
				'formTrigger': opts.formTrigger
			});
		},

		/* -------------------------------
		/* Dentsu Login Exclusion
		/* ------------------------------*/
		UserEnterTrigger: function(){
			dataLayer.push({'event': 'userEnter' });
		}
	});
});
