$(document).ready(function() {
  if($('.js-simple-slider').length) {
    $('.js-simple-slider').each(function(index) {
      $(this).slick({
        arrows: false,
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: $('.js-simple-slider-nav[data-id="'+$(this).attr('data-id')+'"]'),
      });
    });
  }

  if($('.js-simple-slider-nav').length) {
    $('.js-simple-slider-nav').each(function(index) {
      $(this).slick({
        fade: true,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_left"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#chevron_right"/></svg></button>',
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: false,
        draggable: false,
        swipe: false,
        asNavFor: $('.js-simple-slider[data-id="'+$(this).attr('data-id')+'"]')
      });
    });
  }
});
