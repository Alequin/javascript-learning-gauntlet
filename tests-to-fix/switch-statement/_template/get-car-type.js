export const CAR_TYPES = {
  AUDI: "audi",
  BMW: "bmw",
  BENTLY: "bently",
  BUICK: "buick",
};

const getCarIdByType = (carType) => {
  let carId = null;

  switch (carType) {
    case CAR_TYPES.AUDI:
      carId = 123;
    case CAR_TYPES.BMW:
      carId = 234;
    case CAR_TYPES.BENTLY:
      carId = 345;
    case CAR_TYPES.BENTLY:
      carId = 456;
    default:
      return 0;
  }

  return carId;
};

export default getCarIdByType;
