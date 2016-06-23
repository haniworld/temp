require([
  'underscore',
  'jquery',
  'backbone',
  '_global',
  '_utils',
  'shop'
], function(_, $, Backbone) {

	MP.dispatcher.on('shopJsRendered', function(){
		if(Utils.hasPageClass('page-saleproductdetail')) {
			// open all accordions
			$('.product-detail-title').trigger('click');
			$('.read-more').trigger('click');
			$('.size-guide a').trigger('click.');

			var originalWidthClass = "pure-u-1 pure-u-md-5-12 pure-u-lg-1-3 pure-u-xlg-1-4";
			var fullWidthClass = "pure-u-1 pure-u-sm-1 pure-u-md-1 pure-u-lg-1";
			var origialMaxWidth = $('.product-shopping-info-wrap').css('max-width');

			// Add a toggle for production view
			$('.product-shopping-info').prepend('<input type="checkbox" id="toggleViewMode" />Admin Mode');

			var toggleViewMode = function(isQAView){
				if(isQAView){
					$('.product-shopping-info').addClass(fullWidthClass);
					$('.product-shopping-info-wrap').css('max-width', 'none');
				}
				else {
					$('.product-shopping-info').removeClass(fullWidthClass);
					$('.product-shopping-info').addClass(originalWidthClass);
					$('.product-shopping-info-wrap').css('max-width', origialMaxWidth);
				}
			};

			$('#toggleViewMode').on('change', function(){
				toggleViewMode($(this).attr('checked') == 'checked');
			});
		}
	});
});