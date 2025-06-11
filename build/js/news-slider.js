$(document).ready(function() {
  $('.js-news-slider').each(function(index, el) {
    new Swiper(el, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.js-news-slider-next[data-slider="'+el.dataset.slider+'"]',
          prevEl: '.js-news-slider-prev[data-slider="'+el.dataset.slider+'"]',
        },
        breakpoints: {
          600: {
            slidesPerView: 2
          }
        }
    });
  });
});
