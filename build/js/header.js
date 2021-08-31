//функция навешивания класса на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  if($(window).scrollTop() > 0) {
    h.addClass("scrolled");
  } else {
    h.removeClass("scrolled");
  }
};

var lastFocusedElement; //переменная для последнего элемента в фокусе перед открытием поиска
var firstTabStop, lastTabStop; //переменные для первого и последнего элемента в фокусе в открытом попапе поиска

//обработчик для работы с клавиатуры
function keyboardUse(e) {
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === firstTabStop) {
        e.preventDefault();
        lastTabStop.focus();
      }
    } else {
      if (document.activeElement === lastTabStop) {
        e.preventDefault();
        firstTabStop.focus();
      }
    }
  }

  if(e.keyCode === 27) {
    searchClose();
  }
}

function searchOpen() {
  lastFocusedElement = document.activeElement;

  var search = $('.search-popup');

  search.addClass('is-open');

  //ловим все интерактивные элементы в поповере
  var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

  var focusableElements = search.find(focusableElementsString);

  //собираем массив
  focusableElements = Array.prototype.slice.call(focusableElements);

  //выбираем первый элемент массива
  firstTabStop = focusableElements[0];

  //выбираем последний элемент массива
  lastTabStop = focusableElements[focusableElements.length - 1];

  //фокусируемся на первом
  firstTabStop.focus();

  //вешаем события на кнопки
  document.addEventListener('keydown', keyboardUse);
}

function searchClose() {
  $('.search-popup').removeClass('is-open');
  document.removeEventListener('keydown', keyboardUse);
  lastFocusedElement.focus();
}

//открытие поиска
$(document).on('click', '.js-search-opener', function () {
  searchOpen();
  $('.search-bar__input').focus();
  return false;
});

//закрытие поиска
$(document).on('click', '.js-search-closer', function () {
  searchClose();
  return false;
});

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//открытие/закрытие основного меню
$(document).on('click', '.js-menu-opener', function () {
  $(this).toggleClass('is-active');
  $('body').toggleClass('menu-open');
  $('.main-menu').toggleClass('is-open');
  return false;
});

$(document).on('click', '.js-menu-closer', function () {
  $('.header__burger').removeClass('is-active');
  $('body').removeClass('menu-open');
  $('.main-menu').removeClass('is-open');
  return false;
});
