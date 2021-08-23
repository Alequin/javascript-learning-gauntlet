const doubleUpToTwenty = (arrayOfNumbers) => {
  return arrayOfNumbers
    .forEach((number) => {
      return number * 2;
    })
    .filter((number) => {
      return number < 20;
    });
};

export default doubleUpToTwenty;
