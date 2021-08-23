const newIncreasingValue = () => {
  let counter = 0;

  return () => {
    counter = counter + 1;
    return counter;
  };
};

export default newIncreasingValue;
