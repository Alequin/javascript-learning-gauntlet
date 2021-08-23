const repeat = async (timesToRepeat, functionToRepeat) => {
  for (let loop = 0; loop < timesToRepeat; loop++) {
    functionToRepeat();
  }
};

export default repeat;
