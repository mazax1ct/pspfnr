var sliders = document.querySelectorAll('.js-slider-block');

sliders.forEach(function(el) {
  var swiper = new Swiper(el.children[1], {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(el.children[0], {
      loop: true,
      spaceBetween: 10,
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    }
  });
});
