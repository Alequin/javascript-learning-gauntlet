export const defaultToFive = (number = 10) => {
  return number;
};

export const defaultToTen = ({ value } = { value: 20 }) => {
  return value;
};
