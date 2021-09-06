$(document).ready(function() {
  //кастомный селект
	$('.js-select').each(function() {
   var $p = $(this).closest('.select-wrapper__container');
   $(this).select2({
		 minimumResultsForSearch: Infinity,
     dropdownPosition: 'below',
     dropdownParent: $p,
     placeholder: $(this).attr('placeholder')
   });
	}).on("select2:open", function (e) {
		var $p = $(this).closest('.select-wrapper__container');
		$p.addClass('open');
	}).on("select2:close", function (e) {
		var $p = $(this).closest('.select-wrapper__container');
		$p.removeClass('open');
	});

	//запуск плавающего левого меню
  if ($("#float-nav").length) {
    if ($("body").width() >= 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 160
        });

        //навигация по якорям
        $("#float-nav").ddscrollSpy({
          scrolltopoffset: -160
        });
      }, 100);
    }

    //если блок для контента пустой, открепляем плавающее левое меню
    if ($(".js-content-with-sticky").length) {
      if ($('.js-content-with-sticky').html().trim() === '') {
        $(".js-sticky-block").trigger("sticky_kit:detach");
      }
    }
  }
});

//открепляем и перезапускаем прилипающий блок при резайзе
$(window).resize(function() {
  if ($("#float-nav").length) {
    if ($("body").width() >= 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 160
        });

        //навигация по якорям в новости
        $("#float-nav").ddscrollSpy({
          scrolltopoffset: -160
        });
      }, 100);
    }
  }
});

//открепляем и перезапускаем прилипающий блок при повороте устройства
$(window).on("orientationchange", function(event) {
  if ($("#float-nav").length) {
    if ($("body").width() >= 1200) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 160
        });

        //навигация по якорям в новости
        $("#float-nav").ddscrollSpy({
          scrolltopoffset: -160
        });
      }, 100);
    }
  }
});
