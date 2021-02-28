import {createOffers, getFeatures, getPhotos} from './data.js';

const cardFragment = document.querySelector('#card').content;

function createCard() {
  const card = cardFragment.querySelector('article');

  let element = card.cloneNode(card);

  let popupTitle = element.querySelector('.popup__title');
  let popupTextAddress = element.querySelector('.popup__text--address');
  let popupTextPrice = element.querySelector('.popup__text--price');
  let popupType = element.querySelector('.popup__type');
  let popupCapacity = element.querySelector('.popup__text--capacity');
  let popupTime = element.querySelector('.popup__text--time');
  let popupFeatures = element.querySelector('.popup__features');
  let popupDescription = element.querySelector('.popup__description');
  let popupPhotos = element.querySelector('.popup__photos');
  let popupPhotosImg = element.querySelectorAll('.popup__photo');
  let popupAvatar = element.querySelector('.popup__avatar');

  popupTitle.textContent = createOffers()[0].offer.title;
  popupTextAddress.textContent = createOffers()[0].offer.address ;
  popupTextPrice.textContent = createOffers()[0].offer.price + ' ₽/ночь';
  popupType.textContent = createOffers()[0].offer.type;

  let typePlace = ['flat', 'bungalow', 'house', 'palace'];
  let typePlaceRu = ['Квартира', 'Бунгало', 'Дом', 'Дворец'];

  for (let i = 0; i < 4; i++) {
    if (popupType.textContent === typePlace[i]) {
      popupType.textContent = typePlaceRu[i];
    }
  }

  popupCapacity.textContent = createOffers()[0].offer.rooms + ' комнаты для ' + createOffers()[0].offer.guests + ' гостей';
  popupTime.textContent = 'Заезд после ' + createOffers()[0].offer.checkin + ', выезд до ' + createOffers()[0].offer.checkout;

  let offersFeatures = createOffers()[0].offer.features;
  for (let i = 0; i < offersFeatures.length; i++) {
    let offersFeaturesI = '.popup__feature--' + offersFeatures[i];
    element.querySelector('' + offersFeaturesI).textContent = offersFeatures[i];
  }

  popupDescription.textContent = createOffers()[0].offer.description;

  let offersPhotos = createOffers()[0].offer.photos;
  popupPhotos.childNodes[1].src = createOffers()[0].offer.photos[0];

  for (let i = 1; i < offersPhotos.length; i++) {
    let numberPhoto = i;
    let imgCreate = document.createElement('img');
    imgCreate.src = '' + createOffers()[0].offer.photos[numberPhoto];
    imgCreate.classList.add('' + popupPhotosImg[0].classList);
    imgCreate.width = '' + popupPhotosImg[0].width;
    imgCreate.height = '' + popupPhotosImg[0].height;
    imgCreate.alt = popupPhotosImg[0].alt;

    popupPhotos.appendChild(imgCreate);
  }

  popupAvatar.src = createOffers()[0].author.avatar;
  //---
  let features  = getFeatures();
  let featuresHTML='';
  for(let i = 0; i < features.length; i++) {
    featuresHTML+='<li class="popup__feature popup__feature--'+features[i]+'"></li>';
  }
  popupFeatures.innerHTML = featuresHTML;

  //---
  let photos = getPhotos();
  let photosHTML = '';
  for(let i= 0; i < photos.length; i++) {
  console.log()
    photosHTML+='<img src=' + photos[i] + ' class="popup__photo" width="45" height="40" alt="Фотография жилья">';
  }
  popupPhotos.innerHTML = photosHTML;

  return element;
}


export {createCard};
