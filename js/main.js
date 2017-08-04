$(function(){

  $('.menu-btn').click(function(){
    $('.navmenu').slideToggle();
  });
  

  // Initialize smooth smooth-scroll
  smoothScroll.init({
    speed: 800
  });

  // Nice scroll
  $('html').niceScroll({
    cursorcolor:'#8e44ad',
    cursorwidth: "11px",
    background:"#f5f5f5",
  });


  // tooltip
  $('[data-toggle="tooltip"]').tooltip();



  // scroll-to-top
  var scrollButton = $('#scroll-top');

  $(window).scroll(function(){
    $(this).scrollTop() >= 600 ? scrollButton.show() : scrollButton.hide();
  });

  scrollButton.click(function(){
    $('html,body').animate({
      scrollTop: 0
    }, 600 );
  });

});
