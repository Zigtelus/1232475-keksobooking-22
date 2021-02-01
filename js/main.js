function createRandomeNumber(firstNumber, secondNumber) {
  let randomNumber = Math.random() * (secondNumber);
  randomNumber < firstNumber ? randomNumber += firstNumber : randomNumber;

  return randomNumber
}



function stringLengthFirst(minNumber, maxNumber) {
  itRandomNumber = createRandomeNumber(minNumber, maxNumber);

  return Math.floor(itRandomNumber);
}

stringLengthFirst(21, 50)




function stringLengthSecond(minNumber, maxNumber, afterDot) {
  itRandomNumber = createRandomeNumber(minNumber, maxNumber);

  let minusNumber = String(itRandomNumber).length - (afterDot + String(Math.floor(itRandomNumber)).length + 1);
  itRandomNumber = Number(String(itRandomNumber).slice(0, -minusNumber));
  return itRandomNumber
}

stringLengthSecond(21, 50, 5)
