//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > 0) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие поиска в шапке
$(document).on('click', '.js-search-opener', function () {
  $('.search-popup').addClass('is-open');
  $('.search-bar__input').focus();
  return false;
});

//закрытие поиска в шапке
$(document).on('click', '.js-search-closer', function () {
  $('.search-popup').removeClass('is-open');
  return false;
});
