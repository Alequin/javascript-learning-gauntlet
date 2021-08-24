const changeGivenNumber = (number) => {
  return {
    add: (numberToAdd) => number + numberToAdd,
    subtract: (numberToSubtract) => number - numberToSubtract,
    multiply: (numberToMultiply) => number * numberToMultiply,
    divide: (numberToDivide) => number / numberToDivide,
  };
};

export default changeGivenNumber;
