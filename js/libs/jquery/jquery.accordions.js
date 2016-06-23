(function($){
	$.fn.accordion = function(){
		return this.each(function(){
			var $this = $(this),
				$header = $this.find('.accordion-header'),
				$container = $header.next('.accordion-body');

			$header.on('click', function(){
				if ($container.hasClass("height-transition-hidden")){
					$header.find('a').addClass('open');
					$container.slideDownTransition();
				}
				else {
					$header.find('a').removeClass('open');
					$container.slideUpTransition();
				}
			});
		});
	};
}(jQuery));