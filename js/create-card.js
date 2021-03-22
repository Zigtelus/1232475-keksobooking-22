const cardFragment = document.querySelector('#card').content;

function createCard(pin) {
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

  popupTitle.textContent = pin.offer.title;
  popupTextAddress.textContent = pin.offer.address ;
  popupTextPrice.textContent = pin.offer.price + ' ₽/ночь';

  let typePlace = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
  }

  popupType.textContent = typePlace[pin.offer.type];

  popupCapacity.textContent = pin.offer.rooms + ' комнаты для ' + pin.offer.guests + ' гостей';
  popupTime.textContent = 'Заезд после ' + pin.offer.checkin + ', выезд до ' + pin.offer.checkout;

  let offersFeatures = pin.offer.features;
  for (let i = 0; i < offersFeatures.length; i++) {
    let offersFeaturesI = '.popup__feature--' + offersFeatures[i];
    element.querySelector('' + offersFeaturesI).textContent = offersFeatures[i];
  }

  popupDescription.textContent = pin.offer.description;

  let offersPhotos = pin.offer.photos;
  popupPhotos.childNodes[1].src = pin.offer.photos[0];

  for (let i = 1; i < offersPhotos.length; i++) {
    let numberPhoto = i;
    let imgCreate = document.createElement('img');
    imgCreate.src = '' + pin.offer.photos[numberPhoto];
    imgCreate.classList.add('' + popupPhotosImg[0].classList);
    imgCreate.width = '' + popupPhotosImg[0].width;
    imgCreate.height = '' + popupPhotosImg[0].height;
    imgCreate.alt = popupPhotosImg[0].alt;

    popupPhotos.appendChild(imgCreate);
  }

  popupAvatar.src = pin.author.avatar;

  let features  = pin.offer.features;
  let featuresHTML='';
  for (let i = 0; i < features.length; i++) {
    featuresHTML+='<li class="popup__feature popup__feature--'+features[i]+'"></li>';
  }
  popupFeatures.innerHTML = featuresHTML;

  let photos = pin.offer.photos;
  let photosHTML = '';
  for (let i= 0; i < photos.length; i++) {
    photosHTML+='<img src=' + photos[i] + ' class="popup__photo" width="45" height="40" alt="Фотография жилья">';
  }
  popupPhotos.innerHTML = photosHTML;

  return element;
}


export {createCard};
