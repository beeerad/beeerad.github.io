$(document).ready(function(){
	//Smooth scrolling
	var scrollLink = $('.page-scroll');
	scrollLink.click(function(evt){
		evt.preventDefault();
		$('body, html').animate({
			scrollTop: $(this.hash).offset().top
		}, 500)
	})
})