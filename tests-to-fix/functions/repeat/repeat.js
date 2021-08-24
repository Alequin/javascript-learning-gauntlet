const repeat = async (timesToRepeat, functionToRepeat) => {
  for (let loop = 0; loop < timesToRepeat; loop++) {
    await functionToRepeat();
  }
};

export default repeat;
