const doubleUpToTwenty = (arrayOfNumbers) => {
  return arrayOfNumbers
    .map((number) => {
      return number * 2;
    })
    .filter((number) => {
      return number < 20;
    });
};

export default doubleUpToTwenty;
