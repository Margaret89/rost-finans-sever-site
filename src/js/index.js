import {$, Slider} from './common';

// Arrow top page
$(window).on('scroll', function(){
	if($(this).scrollTop()>300){
		$('.js-move-up').addClass('visible');
	}else{
		$('.js-move-up').removeClass('visible');
	}
});
$('.js-move-up').on('click', function(){$('body,html').animate({scrollTop:0},500);return false;});

// //range slider
// if($('.js-range-input').length){
// 	$('.js-range-input').each(function(){
// 		var $parent = $(this).parents('.js-range');
// 		var $rangeVal = $parent.find('.js-range-val');
// 		var numMin = $(this).data('slider-min').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
// 		var numMax = $(this).data('slider-max').toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

// 		if($rangeVal.data('text') == 'день'){
// 			$rangeVal.html('<span class="range__val-num">' + $(this).data('slider-value') + '</span> ' + nameDay($(this).data('slider-value')));

// 			if($parent.data('note') == true){
// 				numMin = numMin + ' ' + nameDay($(this).data('slider-min'));
// 				numMax = numMax + ' ' + nameDay($(this).data('slider-max'));
// 			}
// 		}else{
// 			$rangeVal.html('<span class="range__val-num">' + $(this).data('slider-value') + '</span> ' + $rangeVal.data('text'));

// 			if($parent.data('note') == true){
// 				numMin = numMin + ' ' + $rangeVal.data('text');
// 				numMax = numMax + ' ' + $rangeVal.data('text');
// 			}
// 		}

// 		$parent.find('.js-range-min').text(numMin)
// 		$parent.find('.js-range-max').text(numMax)
// 	});
	

// 	$('.js-range-input').on("slide", function(e) {
// 		var $rangeVal = $(this).parents('.js-range').find('.js-range-val');

// 		if($rangeVal.data('text') == 'день'){
// 			$rangeVal.html('<span class="range__val-num">'+ e.value + '</span> ' + nameDay(e.value));
// 		}else{
// 			$rangeVal.html('<span class="range__val-num">'+ e.value + '</span> ' + $rangeVal.data('text'));
// 		}
// 	});

// 	function nameDay(val) {
// 		var lastFigure = parseInt(val.toString().substr(val.toString().length - 1, 1));

// 		if (val >= 11 && val < 15) {
// 			return 'дней';
// 		}
// 		else {
// 			if (lastFigure == 1) return 'день';
// 			if (lastFigure > 1 && lastFigure < 5) return 'дня';
// 			if (lastFigure == 0 || lastFigure >= 5) return 'дней';
// 		}
// 	}
// }

// // Yandex карта
// if ($('#map').length) {
// 	// Иницилизация карты
// 	ymaps.ready(init);

// 	function init(){
// 		var myMap;

// 		myMap = new ymaps.Map("map", {
// 			center: [64.552, 39.758],
// 			zoom: 17,
// 			controls: []
// 		});

// 		var myPlacemark = new ymaps.Placemark([64.55215, 39.757584] , {
// 			balloonContentBody: 'ул. Трухинова, д. 6А',
// 		},
// 			{ iconLayout: 'default#image',
// 			iconImageHref: '/assets/img/mark-map.png',
// 			iconImageSize: [76, 115],
// 			iconImageOffset: [-38, -57],
// 		});

// 			myMap.geoObjects.add(myPlacemark);
// 	}
// }

// // review slider
// if($('.js-review-slider').length){
// 	$('.js-review-slider').each(function(){
// 		if($(this).find('.js-review-slider-item').length > 3){
// 			$(this).addClass('more-slide');
// 		}
// 	});
	

// 	$('.js-review-slider').slick({
// 		centerMode: true,
// 		centerPadding: 'calc(50% - 615px)',
// 		slidesToShow: 3,
// 		slidesToScroll: 1,
// 		appendArrows: $('.js-review-slider-arr'),
// 		prevArrow: '<button id="prev" type="button" class="btn-arr"><svg class="icon ic-arrow-left" width="8" height="14"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-left"></use></svg></button>',
// 		nextArrow: '<button id="next" type="button" class="btn-arr"><svg class="icon ic-arrow-right" width="8" height="14"><use xlink:href="assets/sprites/sprite.svg#ic-arrow-right"></use></svg></button>',
// 		responsive: [
// 			{
// 				breakpoint: 1470,
// 				settings: {
// 					centerPadding: 'calc(50% - 500px)',
// 					slidesToShow: 3,
// 				}
// 			},
// 			{
// 				breakpoint: 1240,
// 				settings: {
// 					centerPadding: 'calc(50% - 380px)',
// 					slidesToShow: 1,
// 				}
// 			},
// 			{
// 				breakpoint: 992,
// 				settings: {
// 					centerPadding: 'calc(50% - 360px)',
// 					slidesToShow: 1,
// 				}
// 			},
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					centerPadding: '40px',
// 					slidesToShow: 1,
// 				}
// 			},
// 		]
// 	});
// }

// // unwrap block
// if($('.js-unwrap-block').length){
// 	$('.js-unwrap-block-btn').on('click',function(event){
// 		event.preventDefault();
// 		var $parent = $(this).parents('.js-unwrap-block');
		
// 		$parent.toggleClass('opened');
// 		if($parent.hasClass('opened')){
// 			$parent.children('.js-unwrap-content').slideDown(400);
// 		}else{
// 			$parent.children('.js-unwrap-content').slideUp(400);
// 		}
// 	});
// }

// show/hide mobile header contacts
if($('.js-header-mob-contact-btn').length){
	$('.js-header-mob-contact-btn').on('click', function(){
		if(!$(this).hasClass('active')){
			hideHeadContacts();

			$('.js-btn-menu').removeClass('active');
			$('.js-main-menu-wrap').slideUp(300);

			$(this).addClass('active');
			$(this).parent('.js-header-mob-contact').find('.js-header-mob-contact-popup').slideDown(300);
		}
	});

	$('.js-header-mob-contact-close').on('click', function(){
		hideHeadContacts();
	});

	$(document).on('click', function(event) {
		console.log(widthWindow);
		if(widthWindow < 992){
			if ($(event.target).closest(".js-header-mob-contact-popup").length) return;
			if ($(event.target).closest(".js-header-mob-contact-btn").length) return;
			hideHeadContacts();
			event.stopPropagation();
		}
	  });
}

function hideHeadContacts(){
	$('.js-header-mob-contact-btn').removeClass('active');
	$('.js-header-mob-contact-popup').slideUp(300);
}

// show/hide mobile menu
if($('.js-btn-menu').length){
	$('.js-btn-menu').on('click', function(){
			hideHeadContacts();
			$(this).toggleClass('active');
			$('.js-main-menu-wrap').slideToggle(300);
	});

	$(document).on('click', function(event) {
		if(widthWindow < 768){
			if ($(event.target).closest(".js-btn-menu").length) return;
			if ($(event.target).closest(".js-main-menu-wrap").length) return;
			$('.js-btn-menu').removeClass('active');
			$('.js-main-menu-wrap').slideUp(300);
			event.stopPropagation();
		}
	});
}

// // show/hide map
// if($('.js-map-panel-arr').length){
// 	$('.js-map-panel-arr').on('click', function() {
// 		$(this).toggleClass('active');
// 		$(this).closest('.js-map-wrap').find('.js-map-wrap-content').slideToggle(300);
// 	});
// }

// show/hide footer text
if($('.js-footer-more-btn').length){
	$('.js-footer-more-btn').on('click', function() {
		$(this).toggleClass('active');
		$(this).closest('.js-footer-more').find('.js-footer-more-content').slideToggle(300);
	});
}