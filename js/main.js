function createRandomeNumber(firstNumber, secondNumber) {
 let randomNumber;
 if( secondNumber < firstNumber) {
   randomNumber = secondNumber + Math.random() * (firstNumber - secondNumber+1);
 } else {
    randomNumber = firstNumber + Math.random() * (secondNumber - firstNumber+1);
 }
  return randomNumber
}


function getIntegerNumber(minNumber, maxNumber) {
 let itRandomNumber = createRandomeNumber(minNumber, maxNumber);

  return Math.floor(itRandomNumber);
}

function getDecimalNumber(minNumber, maxNumber, afterDot) {
  let numOrder = Math.pow(10,afterDot);
  let bigRand = Math.floor(createRandomeNumber(minNumber*numOrder,maxNumber*numOrder));
  return bigRand/numOrder;
}




// third lesson

function createNewArrayForOffer(initially) {
  let newArray = [];
  for (let i = 0; i < getIntegerNumber(1, initially.length); i++) {
    newArray[i] = initially[i];
  }
  return newArray
}


let author = {
  avatar: 'img/avatars/user0' + getIntegerNumber(1, 8) + '.png'
}

let location = {
  x: getDecimalNumber(35.65000, 35.70000, 5),
  y: getDecimalNumber(139.70000, 139.80000, 5)
}

let offer = {
  title: 'title_number_1',
  address: location.x, location.y,
  price: 2,
  type: 'palace',
  rooms: 1,
  guests: 1,

  checkin: function() {
    const checkinArray = [
      "12:00",
      "13:00",
      "14:00"
    ];

    return checkinArray[getIntegerNumber(0, checkinArray.length -1)]
  },

  checkout: function() {
    const checkoutArray = [
      "12:00",
      "13:00",
      "14:00"
    ];

    return checkoutArray[getIntegerNumber(0, checkoutArray.length -1)]
  },

  features:  function() {
    const featuresArray = [
      "wifi",
      "dishwasher",
      "parking",
      "washer",
      "elevator",
      "conditioner"
    ];

    return createNewArrayForOffer(featuresArray)
  },

  description: 'dog house',

  photos: function() {
    const photosArray = [
      "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
    ];

    return createNewArrayForOffer(photosArray)
  }


}
