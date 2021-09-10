function filter(el) {
  var value = $(el).val().toLowerCase();

  $('.structure-map__search-dropdown a').each(function() {
    if ($(this).text().toLowerCase().search(value) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
    if($('.structure-map__search-dropdown a').is(':visible')){
      $('.structure-map__search-dropdown .no-result').removeClass('is-active');
    }else{
      $('.structure-map__search-dropdown .no-result').addClass('is-active');
    }
  });
}

function structureSearchClose(e) {
  $('.structure-map__search-dropdown').removeClass('is-open');
  document.removeEventListener('keydown', structureSearchEscClose);
  document.removeEventListener('click', structureSearchClickClose);
}

function structureSearchClickClose(evt) {
  if (!$('.structure-map__search').is(evt.target) && $('.structure-map__search').has(evt.target).length === 0) {
    $('.structure-map__search-dropdown').removeClass('is-open');
    document.removeEventListener('keydown', structureSearchEscClose);
    document.removeEventListener('click', structureSearchClickClose);
	}
}

function structureSearchEscClose(e) {
  if(e.keyCode === 27) {
    structureSearchClose();
    $('.structure-map__search-input').blur();
  }
}

$(document).on('focus', '.structure-map__search-input', function () {
  $('.structure-map__search-dropdown').addClass('is-open');
  document.addEventListener('keydown', structureSearchEscClose);
  document.addEventListener('click', structureSearchClickClose);
});

$(document).on('keyup', '.structure-map__search-input', function () {
  $('.structure-map__search-dropdown').addClass('is-open');
  filter($(this));
});

$(document).on('click', '.js-map-popup', function () {
  window.location.href = $(this).attr('href');
});

$(document).on('mouseenter', '.js-map-popup', function () {
  $('.structure-map__popup').addClass('is-open');
  $('.structure-map__popup').css('left', $(this).attr('data-left')).css('top', $(this).attr('data-top'));
  $('.structure-map__popup-title').text($(this).attr('data-title'));
  $('.structure-map__popup-img img').attr('src', $(this).attr('data-img'));
  $('.structure-map__popup-leader-name').text($(this).attr('data-name'));
  $('.structure-map__popup-leader-about').text($(this).attr('data-about'));
  $('.structure-map__popup-link').attr('href', $(this).attr('href'));
});

$(document).on('mouseleave', '.js-map-popup', function () {
  $('.structure-map__popup').removeClass('is-open');
});

$(document).on('mouseenter', '.structure-map__fo-list a, .structure-map__fos ul li:first-child a', function () {
  $('.js-map-popup[data-target="'+ $(this).attr('data-target') +'"]').addClass('hover');
  $('.js-map-popup[data-target="'+ $(this).attr('data-target') +'"]').trigger('mouseenter');
});

$(document).on('mouseleave', '.structure-map__fo-list a, .structure-map__fos ul li:first-child a', function () {
  $('.js-map-popup[data-target="'+ $(this).attr('data-target') +'"]').removeClass('hover');
  $('.structure-map__popup').removeClass('is-open');
});
