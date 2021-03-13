function createRandomeNumber(firstNumber, secondNumber) {
 let randomNumber;
 if ( secondNumber < firstNumber) {
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


function getTitle() {
  let titles = ['3-ех комнатная квартира в Новосибирске', 'Студия 30 квм', 'Комната 15 квм'];
  return titles[getIntegerNumber(0, titles.length-1)]
}


let types = ['bungalow', 'flat', 'house', 'palace'];
function getOfferType() {
  return types[getIntegerNumber(0, types.length-1)]
}


function getCheckin() {
  let checkins = ['12:00', '13:00', '14:00'];
  return checkins[getIntegerNumber(0, checkins.length-1)]
}


export {createRandomeNumber, getIntegerNumber, getDecimalNumber, getTitle, getOfferType, getCheckin, types};
