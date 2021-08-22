import { concatArrays } from "./concat-arrays";

describe("concat-arrays", () => {
  it("can join two arrays together", () => {
    expect(concatArrays([1, 2, 3], [4, 5, 6])).toStrictEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
});
