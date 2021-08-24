const removeFalsyValues = (array) => array.filter(isTruthy);

const isTruthy = (value) => {
  return value;
};

export default removeFalsyValues;
