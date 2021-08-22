import findTheMax from "./find-the-max";

describe("find-the-max", () => {
  it("can find the max value from the given numbers", () => {
    expect(findTheMax(3, 2, 4, 1)).toBe(4);
  });

  it("can find the max value from an array of numbers", () => {
    const largeArray = new Array(100).fill(null).map((_, index) => index);
    expect(findTheMax(...largeArray)).toBe(99);
  });
});
