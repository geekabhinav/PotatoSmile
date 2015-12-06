/*  ------------------------------------------
*    PotatoSmile Chrome Extension 
*    Version: 1.1.13
*/

$(document).ready(function(){
	$('h4.slider-title').click(function(){
		var currTitle = $(this);
		if(currTitle.next().hasClass('open'))
			return false;
		$('.slide.open').slideUp('fast', function(){
			$(this).removeClass('open');
			currTitle.next().slideDown().addClass('open');
		});
	});
	$('#sharelink').click(function(){
		$('h4.slider-title').last().trigger('click');
		return false;
	});
	$('area').bind('mouseover', function(){
		var theMessage = $(this).attr('alt');
		$('<div class="tooltip">' + theMessage + '</div>').appendTo('body').fadeIn('fast');
		$(this).bind('mousemove', function(e){
			$('div.tooltip').css({
				'top': e.pageY - ($('div.tooltip').height() / 2) - 5,
				'left': e.pageX + 15
			});
		});
	}).bind('mouseout', function(){
		$('div.tooltip').fadeOut('fast', function(){
			$(this).remove();
		});
	});
});
(function() {
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();