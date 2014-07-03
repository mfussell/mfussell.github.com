jQuery( document ).ready(function( $ ) {

  $('.inner-wrap').css('min-height', $(window).height() + 45 +  'px');
  $('.container.content').css('min-height', $(window).height() + 45 + 'px');

  $('a.left-off-canvas-toggle').click(function() {
    $('.container.content').css('min-height', $(window).height() + 200 + 'px');
    $('.left-off-canvas-menu').css('min-height', $('.container.content').height() + 45);
    $('body').toggleClass('menu-active');
  });


    $('.g').each(function() {

        $(this).find('li:not(:first-child)').hide();

        var that = this;

        $(this).find('li:not(:first-child)').hide();

        $(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
          },
          mainClass: 'mfp-img-mobile',
          image: {
            titleSrc: function(item) {
              var item = $('li', $(that)).eq(item.index);
              var captionAndCredit = $('.caption', item).html();
              console.log(item.index);

              return captionAndCredit;
            },
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
          }
        });
      });
 
     
     $(document).foundation({
        topbar: {
          custom_back_text: true,
          back_text: 'back',
          mobile_show_parent_link: true
        }
      });
  

  $(window).load(function() {
    $("#compare1").twentytwenty();
  });
 
  jQuery('#disqus_thread').click( function() {
    console.log ('close offcanvas nav');
    jQuery('.exit-off-canvas').click();
  });
});

