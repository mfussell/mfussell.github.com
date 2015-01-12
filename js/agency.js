/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function(){
  $(".fancybox")
  .attr('rel', 'gallery')
  .fancybox({
    padding    : 0,
    margin     : 5,
    nextEffect : 'fade',
    prevEffect : 'none',
    autoCenter : false
  });
});

function fancyBoxMe(index){
  var gallerySize = $(".timeline-image img").size();
  if((index+1) == gallerySize){ nexT = 0 } else { nexT = index+1}
  if(index == 0){ preV = (gallerySize-1) } else { preV = index-1}
  var tarGet = $('.timeline-image img').eq(index).attr('src');
  $.fancybox({
    'transitionIn' : 'elastic',
    'transitionOut' : 'elastic',
    'speedIn' : 600,
    'speedOut' : 200,
    'overlayShow' : false,
    'href': tarGet,
    'titlePosition': 'inside',
    'titleFormat' : function(){
      return 'Image '+(index+1)+' of '+gallerySize+'<a id="preV" href="javascript:;" onclick="fancyBoxMe('+preV+')">prev</a> <a id="nexT" href="javascript:;" onclick="fancyBoxMe('+nexT+')">next</a>';
    }
  }); // fancybox
} // fancyBoxMe
$(document).ready(function() {
  $(".timeline-image img").each(function(i){
    $(this).bind('click', function(){
      fancyBoxMe(i);
    }); //bind
  }); //each
}); // ready

$( document ).ready(function() {
  $(".gallery").each(function(index) {
    $(this).find('a').attr('rel','gallery_' + index);
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
