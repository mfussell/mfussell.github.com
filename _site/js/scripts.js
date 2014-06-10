jQuery( document ).ready(function( $ ) {
  jQuery('.g').each(function() {
        var that = this;

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
  jQuery(window).load(function() {
  jQuery("#compare1").twentytwenty();
});
});

