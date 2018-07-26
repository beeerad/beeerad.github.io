$(document).ready(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() > 100) {
      $('.navbar-default').addClass('shrink');
    }
    else {
    $('.navbar-default').removeClass('shrink');
    }
  });
});