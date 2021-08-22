import addToTheFirst from "./add-to-the-first";

describe("add-to-the-first", () => {
  it("returns an array of numbers which have been added to the first given argument", () => {
    expect(addToTheFirst(10, 1, 2, 3, 4, 5)).toStrictEqual([
      11, 12, 13, 14, 15,
    ]);
  });
});
