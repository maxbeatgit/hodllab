$(document).ready(function () {

	/* Smooth scroll */

	$('.header__link, .main__button, .scroll-link').click(function () {
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top + "px"
		}, 700);
		return false;
	});

	
	
	/* Main slider */

	const mainSlider = new Swiper('.main__slider', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		effect: "fade",
		speed: 700,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false, // чтобы не останавливался, когда полистаешь его вручную
		},
	});
	


	/* Services slider */

	const servicesSlider1 = new Swiper('.services__slider1', {
		slidesPerView: "auto",
		spaceBetween: 0,
		freeMode: true,
		simulateTouch: true,
		grabCursor: true,
		loop: true,
		speed: 25000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false
		},
	});

	const servicesSlider2 = new Swiper('.services__slider2', {
		slidesPerView: "auto",
		spaceBetween: 0,
		freeMode: true,
		simulateTouch: true,
		grabCursor: true,
		loop: true,
		speed: 40000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false
		},
	});

	$(window).on('orientationchange', function (e) {
		if ($('.services__slider1').length > 0 && $('.services__slider2').length > 0) {
			setTimeout(function () {
				servicesSlider1.slideNext();
				servicesSlider2.slideNext();
			}, 500);
		}
	});



	/* Portfolio slider */

	const portfolioSlider = new Swiper('.portfolio__slider', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		speed: 700,
		navigation: {
			nextEl: '.portfolio__arrow_next',
			prevEl: '.portfolio__arrow_prev',
		},
	});



	/* UP button */

	$(window).scroll(function () {
		if ($(window).scrollTop() > 500) {
			$('.up').addClass('up_show');
		} else {
			$('.up').removeClass('up_show');
		}
	});

	$('.up').click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, 700);
		return false;
	});



	/* AOS */

	AOS.init({
		duration: 1400,
		delay: 100,
		offset: 50,
		once: true,
		// disable: 'mobile',
	});

});