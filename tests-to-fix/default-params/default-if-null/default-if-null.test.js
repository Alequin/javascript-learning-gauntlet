import { defaultToFive, defaultToTen } from "./default-if-null";

describe("default-if-null", () => {
  describe("default-to-five", () => {
    it("returns the given value", () => {
      expect(defaultToFive(1)).toBe(1);
    });

    it("returns the number five if no argument is given", () => {
      expect(defaultToFive()).toBe(5);
    });
  });

  describe("default-to-10", () => {
    it("returns the given value", () => {
      expect(defaultToTen({ value: 1 })).toBe(1);
    });

    it("returns the number 10 if no argument is given", () => {
      expect(defaultToTen()).toBe(10);
    });
  });
});
