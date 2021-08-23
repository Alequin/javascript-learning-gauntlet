import newIncreasingValue from "./new-increasing-value";

describe("newIncreasingValue", () => {
  it("returns a function which adds one to its return value every time it is called", async () => {
    const increasingValue = newIncreasingValue();

    expect(increasingValue).toBe(1);
    expect(increasingValue).toBe(2);
    expect(increasingValue).toBe(3);
    expect(increasingValue).toBe(4);
    expect(increasingValue).toBe(5);
  });
});
