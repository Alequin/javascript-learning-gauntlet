import combineKeysAndValues from "./combine-keys-and-values";

describe("combine-keys-and-values", () => {
  it("can combine the keys and values of the given object into a list of strings", () => {
    expect(
      combineKeysAndValues({ spot: "dog", felix: "cat", spencer: "rat" })
    ).toStrictEqual(["spot - dog", "felix - cat", "spencer - rat"]);
  });
});
