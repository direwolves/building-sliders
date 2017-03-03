$(document).ready(function(){

	// show the first img in our slideshow by default
	$('img').eq(0).show();
	// create a var to keep track of the index of the img we want to work with
	var currentSlideIndex = 0;
	// the number of images in our slideshow
	var slideCount = $('img').length;

	doSlides = function(){
		// hide the current slide
		$('img').eq(currentSlideIndex).hide();
		
		// increase the currentSlideIndex by 1
		// only IF you're not on your last slide
		if (currentSlideIndex < slideCount - 1){
			currentSlideIndex = currentSlideIndex + 1;
		} else {
			currentSlideIndex = 0;
		}

		// show the currentSlideIndex
		$('img').eq(currentSlideIndex).show();
		console.log('currentSlideIndex set to ' + currentSlideIndex);
	};

	$('.js-next').on('click', function(){
		doSlides();
	});



}); // closes doc.ready