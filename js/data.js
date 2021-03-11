import {createRandomeNumber, getIntegerNumber, getDecimalNumber, getTitle, getOfferType, getCheckin} from './util.js';



function getFeatures() {
  let arr = [];
  let features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  let arrLength = getIntegerNumber(2,features.length);
  if(arrLength == features.length) {return features};
  for(let i = 0; i < arrLength; i++) {
    let fNumber = getIntegerNumber(0, features.length -1);
    while(arr.indexOf(features[fNumber])> -1) fNumber = getIntegerNumber(0, features.length -1);
    arr.push(features[fNumber])
  }
  return arr;
}

function getPhotos() {
  let arr = [];
  let photos = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
  let arrLength = getIntegerNumber(2,photos.length);
  if(arrLength == photos.length) {return photos};
  for(let i = 0; i < arrLength; i++) {
    let pNumber = getIntegerNumber(0, photos.length -1);
    while(arr.indexOf(photos[pNumber])> -1) pNumber = getIntegerNumber(0, photos.length -1);
    arr.push(photos[pNumber])
  }
  return arr;
}

function getDescription() {
  let description = ['Помещение с евроремонтом и всем необходимым для длительного комфортного проживания', 'В квартире имеются: стиральная машина, стол и wi-fi', 'Помещение расположено в элитном районе в центре города и имеет все необходимые комуникации'];
  return description[getIntegerNumber(0, description.length-1)]
}

function createOffers() {
  let arr = [];
  for (let i = 0; i < 10; i++) {

    let location = {
      x: getDecimalNumber(35.65, 35.7, 5),
      y: getDecimalNumber(139.7, 139.8, 5)
    }

    let obj = {

      author: { avatar: 'img/avatars/user0' + getIntegerNumber(1, 8) + '.png' },

      offer: {
        title: getTitle(),
        address: location.x + ' ' + location.y,
        price: getIntegerNumber(300, 500),
        type: getOfferType(),
        rooms: getIntegerNumber(1, 5),
        guests: getIntegerNumber(1, 15),
        checkin: getCheckin(),
        checkout: getCheckin(),
        features: getFeatures(),
        description: getDescription(),
        photos: getPhotos(),
      },

      location: location,
    }
    arr.push(obj)
  }
  return arr;
}

export {getFeatures, getPhotos, getDescription, createOffers};
