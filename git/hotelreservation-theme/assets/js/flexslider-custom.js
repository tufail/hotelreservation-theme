$(document).ready(function() {
    
     /*Preloader*/
  $(window).load(function() {
    setTimeout(function() {
      $('body').addClass('loaded');      
    }, 200);
  });


    /* ======= Header Background Slideshow - Flexslider ======= */    
    /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */
    $('.flexslider').flexslider({
    animation: "fade",
    directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
        controlNav: false, //remove the default control-nav
        slideshowSpeed: 6000
  }); 

    $( ".dateclick" ).datepicker();
    $( ".dateclick2" ).datepicker(); 

});



