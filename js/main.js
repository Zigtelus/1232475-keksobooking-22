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

function createNewMassifForOffer(initially) {
  let newMassif = [];
  for (let i = 0; i < getIntegerNumber(1, initially.length); i++) {
    newMassif[i] = initially[i];
  }
  return newMassif
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
    const massif = [
      "12:00",
      "13:00",
      "14:00"
    ];

    return massif[getIntegerNumber(0, massif.length -1)]
  },

  checkout: function() {
    const massif = [
      "12:00",
      "13:00",
      "14:00"
    ];

    return massif[getIntegerNumber(0, massif.length -1)]
  },

  features:  function() {
    const massif = [
      "wifi",
      "dishwasher",
      "parking",
      "washer",
      "elevator",
      "conditioner"
    ];

    return createNewMassifForOffer(massif)
  },

  description: 'dog house',

  photos: function() {
    const massif = [
      "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
      "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
    ];

    return createNewMassifForOffer(massif)
  }


}
