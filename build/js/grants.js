$(document).ready(function() {
  $('.js-grants')[0].reset();
});

$(document).on('change', '.js-grants input[type="radio"]', function () {
  let grantClass = $(this).val();
  $('.grant-description').hide();
  $('.grant-description[data-grant="'+$(this).val()+'"]').show();

  $('.input-label').hide();
  $('.input-label').find('input').prop('disabled', 'disabled');
  $('.input-label').find('textarea').prop('disabled', 'disabled');
  $('.select-wrapper').hide();
  $('.select-wrapper').find('select').prop('disabled', 'disabled');


  $('.'+grantClass).show();
  $('.'+grantClass).find('input').prop('disabled', '');
  $('.'+grantClass).find('textarea').prop('disabled', '');
  $('.'+grantClass).find('select').prop('disabled', '');

  $('.grants-form .buttons-block').show();
});
