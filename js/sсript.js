
$('.slider').slick({
	arrows: false,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	dots: true,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 500,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	});

	
	
$('.main__card-ingormation-team-swiper').slick({
	arrows: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	autoplay: true,
	autoplaySpeed: 3000,
	});


	let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector('.menu');
	menuBtn.addEventListener('click', function(){
		menuBtn.classList.toggle('active22');
		menu.classList.toggle('active22');
	});
