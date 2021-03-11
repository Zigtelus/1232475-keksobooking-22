import {createOffers} from './data.js';

console.log(createOffers()[0].offer.address)
console.log(createOffers()[0].offer.address.split(' ')[0])
console.log(createOffers()[0].offer.address.split(' ')[1])

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
    if (true) {
      console.log('Карта инициализирована')
      addClassDisabled('remove');
      addAttrDisabled(false);
    }
  })

// position map
  .setView({
    lat: createOffers()[0].offer.address.split(' ')[0],
    lng: createOffers()[0].offer.address.split(' ')[1],
  }, 10);

// load map
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);





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
      iconSize: [52, 52],
      iconAnchor: [26, 52],
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
    .bindPopup(title)
    .on('moveend', (evt) => {
      console.log(evt.target.getLatLng());
    });
  });



createMarker()
createMarker()

console.log(L)



function createCard() {
  const card = cardFragment.querySelector('article');

  let element = card.cloneNode(card);
}
