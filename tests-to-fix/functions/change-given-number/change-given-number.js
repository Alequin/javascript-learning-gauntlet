const changeGivenNumber = (number) => {
  return {
    add: (numberToAdd) => number + numberToAdd,
    subtract: (numberToSubtract) => {
      number - numberToSubtract;
    },
    multiply: (numberToMultiply) => number,
    divide: null,
  };
};

export default changeGivenNumber;
