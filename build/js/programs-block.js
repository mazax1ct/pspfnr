$(document).on('click', '.js-program-item', function () {
  $('.js-program-item').removeClass('is-active');
  $(this).addClass('is-active');

  $('.programs-block__detail').removeClass('is-active');
  $('.programs-block__detail[data-target="'+ $(this).attr('data-target') +'"]').addClass('is-active');
  return false;
});
