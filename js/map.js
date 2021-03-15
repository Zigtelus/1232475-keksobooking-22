import {createOffers} from './data.js';
import {createCard} from './create-card.js';
import {centerCity, noticeAddress} from './form-validation.js';


const MAIN_PIN_WIDTH = 52;
const MAIN_PIN_HEIGHT = 52;

const ADV_PIN_WIDTH = 50;
const ADV_PIN_HEIGHT = 50;




function addAttrDisabled(status) {
  const addDisabled = ['type', 'price', 'timein', 'timeout', 'room_number', 'capacity', 'housing-type', 'housing-price', 'housing-rooms', 'housing-guests', 'housing-features'];

  for (let i = 0; i < addDisabled.length; i++) {
    document.querySelector('#' + addDisabled[i]).disabled = status;
  }
}
addAttrDisabled(true);


function addClassDisabled(status) {
  const addDisabled = ['ad-form', 'map__filters'];

  for (let i = 0; i < addDisabled.length; i++) {
    if (status === 'add') {
      document.querySelector('.' + addDisabled[i]).classList.add('ad-form--disabled')
    } else {
      document.querySelector('.' + addDisabled[i]).classList.remove('ad-form--disabled')
    }
  }
}
addClassDisabled('add');




// map
const map = L.map('map')
  .on('load', () => {
    addClassDisabled('remove');
    addAttrDisabled(false);
  })

// position map
  .setView({
    lat: centerCity.lat,
    lng: centerCity.lng,
  }, 10);



// load map
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


// main pin
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [MAIN_PIN_WIDTH, MAIN_PIN_HEIGHT],
  iconAnchor: [MAIN_PIN_WIDTH/2, MAIN_PIN_HEIGHT],
});

const mainPoint = L.marker(
  {
    lat: centerCity.lat,
    lng: centerCity.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
)
.addTo(map)
.on('moveend', (evt) => {
  noticeAddress.value = evt.target.getLatLng().lat + ', ' + evt.target.getLatLng().lng;
});



console.log(mainPoint)
const points = [
  {
    title: createOffers()[0].offer.title,
    lat: createOffers()[0].offer.address.split(' ')[0],
    lng: createOffers()[0].offer.address.split(' ')[1],
  },
];

points.forEach(({lat, lng, title}) => {
  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [ADV_PIN_WIDTH, ADV_PIN_HEIGHT],
    iconAnchor: [ADV_PIN_WIDTH/2, ADV_PIN_HEIGHT],
  });

  const marker = L.marker (
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
  .addTo(map)
  .bindPopup(createCard())
});
