import isEqual from "./is-equal";

describe("is-equal", () => {
  it("Can confirm two values are equal", () => {
    expect(isEqual(1, 1)).toBe(true);
  });

  it("Should not return true when the types are different", () => {
    expect(isEqual(1, "1")).toBe(false);
  });
});
