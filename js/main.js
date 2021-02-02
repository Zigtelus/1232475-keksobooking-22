function createRandomeNumber(firstNumber, secondNumber) {
 let randomNumber;
 if( secondNumber < firstNumber) {
   randomNumber = secondNumber + Math.random() * (firstNumber - secondNumber+1);
 }
  else {
    randomNumber = firstNumber + Math.random() * (secondNumber - firstNumber+1);
  }
  return randomNumber
}


function getIntegerNumber(minNumber, maxNumber) {
 let itRandomNumber = createRandomeNumber(minNumber, maxNumber);

  return Math.floor(itRandomNumber);
}

function getDecimalNumber(minNumber, maxNumber, afterDot) {
  let itRandomNumber = createRandomeNumber(minNumber, maxNumber);
  if(itRandomNumber>Math.max(minNumber, maxNumber)) {
    itRandomNumber = Math.max(minNumber, maxNumber);
  }
  return Number(itRandomNumber.toFixed(afterDot))
}

for (let i = 1; i < 20; i++) {
  console.log(getDecimalNumber(24, 19,4))
}
