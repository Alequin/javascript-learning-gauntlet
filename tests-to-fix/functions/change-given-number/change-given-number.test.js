import changeGivenNumber from "./change-given-number";

describe("change-given-number.test", () => {
  it("can add to the starting number", async () => {
    const { add } = changeGivenNumber(10);
    expect(add(20)).toBe(30);
  });

  it("can subtract from the starting number", async () => {
    const { subtract } = changeGivenNumber(10);
    expect(subtract(3)).toBe(7);
  });

  it("can multiply the starting number", async () => {
    const { multiply } = changeGivenNumber(10);
    expect(multiply(5)).toBe(50);
  });

  it("can divide the starting number", async () => {
    const { divide } = changeGivenNumber(10);
    expect(divide(2)).toBe(5);
  });
});
