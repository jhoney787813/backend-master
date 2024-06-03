function calculateNumbersOperations(firstNumber, secondNumber, thirdNumber) {
    const sum = addNumbers(firstNumber, secondNumber);
    const product = multiplyNumbers(sum, thirdNumber);
    const sine = calculateSine(product);
    return sine;
  }
  
  function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  }
  
  function multiplyNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  }
  
  function calculateSine(number) {
    return Math.sin(number);
  }