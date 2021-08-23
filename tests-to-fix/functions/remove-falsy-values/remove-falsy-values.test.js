import removeFalsyValues from "./remove-falsy-values";

describe("removeFalsyValues", () => {
  it("removes all falsy values from the given array", async () => {
    const arrayToTest = [0, 1, 2, null, 3, undefined, 4, 5, 6, NaN, 7, ""];

    expect(removeFalsyValues(arrayToTest)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
