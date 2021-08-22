import templateFunction from "./template-function";

describe("template function", () => {
  it("can return the given number incremented by 1", () => {
    expect(templateFunction(1)).toBe(2);
  });
});
