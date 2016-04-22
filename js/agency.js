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

function fancyBoxMe(photos) {
  $.fancybox.open(photos,
    {
      'padding'    : 0,
      'margin'     : 5,
      'nextEffect' : 'fade',
      'prevEffect' : 'none',
      'autoCenter' : false,
      'transitionIn' : 'elastic',
      'transitionOut' : 'elastic',
      'speedIn' : 600,
      'speedOut' : 200,
      'overlayShow' : false,
      'titlePosition': 'inside'
    }
  ); // fancybox
} // fancyBoxMe

$( document ).ready(function() {
  $(".gallery").each(function(index) {
    $(this).find('a').attr('rel','gallery_' + index);
  });
});

$(window).load( function() {
  $('#photosets').masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.gallery'
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
