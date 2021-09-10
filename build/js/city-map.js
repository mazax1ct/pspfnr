//яндекс карты
var cityMap;
var locations = [
  [59.883467, 30.266263, 'Санкт-Петербург, пр. Стачек, д. 48, к2, бизнес-центр Империал']
];

setTimeout(function() {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=9d7b529c-c833-4e6e-b74e-a623a6a75a71&lang=ru_RU&onload=init';
  document.getElementById('city_map').appendChild(elem);
}, 1000);


function init() {
  cityMap = new ymaps.Map('city_map', {
    center: [59.883467, 30.266263],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  });

  cityMap.behaviors.disable('scrollZoom');

  var i, placemark, address;

  for (i = 0; i < locations.length; i++) {
    placemark = new ymaps.Placemark([locations[i][0], locations[i][1]], {
      hintContent: locations[i][2]
    }, {

    });

    cityMap.geoObjects.add(placemark);
  }

  var body = document.querySelector('body');
  if (body.offsetWidth < 768) {
    cityMap.behaviors.disable('drag');
    cityMap.behaviors.enable('MultiTouch');
  }
}
