function tableFilter(el) {
  var value = $(el).text().toLowerCase();

  $('.cities tr td:first-child').each(function() {
    if ($(this).text().substr(0, 1).toLowerCase().search(value) > -1) {
      $(this).parent('tr').show();
    } else {
      $(this).parent('tr').hide();
    }
  });
}

$(document).on('click', '.ahphabeth button', function () {
  $('.ahphabeth button').removeClass('is-active');
  $(this).addClass('is-active');
  tableFilter($(this));
  return false;
});

$(document).on('click', '.cities tr', function () {
  window.location.href = $(this).attr('data-href');
});
