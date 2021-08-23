import doubleUpToTwenty from "./double-up-to-twenty";

describe("doubleUpToTwenty", () => {
  it("doubles all the numbers in the given array and removes any which go over 20", async () => {
    expect(doubleUpToTwenty([1, 3, 5, 7, 13, 17])).toStrictEqual([
      2, 6, 10, 14,
    ]);
  });
});
