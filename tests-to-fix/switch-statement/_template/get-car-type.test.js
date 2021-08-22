import getCarIdByType, { CAR_TYPES } from "./get-car-type";

describe("template function", () => {
  it("can get the id of the audi", () => {
    expect(getCarIdByType(CAR_TYPES.AUDI)).toBe(123);
  });

  it("can get the id of the bmw", () => {
    expect(getCarIdByType(CAR_TYPES.BMW)).toBe(234);
  });

  it("can get the id of the bently", () => {
    expect(getCarIdByType(CAR_TYPES.BENTLY)).toBe(345);
  });

  it("can get the id of the buick", () => {
    expect(getCarIdByType(CAR_TYPES.BUICK)).toBe(456);
  });

  it("returns 0 if it cannot find the cars id", () => {
    expect(getCarIdByType("not a car type")).toBe(0);
  });
});
