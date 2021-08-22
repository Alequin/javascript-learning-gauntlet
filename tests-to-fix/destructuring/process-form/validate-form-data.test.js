import validateFormData from "./validate-form-data";

describe("validate-form-data", () => {
  it("confirms all the required fields in the form are provided", () => {
    const formData = {
      firstName: "John",
      lastName: "Smith",
      dateOfBirth: "1990",
      place: "England",
    };

    expect(validateFormData(formData)).toBe(true);
  });

  it("returns false if any fields are missing", () => {
    const formData = {
      lastName: "Smith",
      dateOfBirth: "1990",
      place: "England",
    };

    expect(validateFormData(formData)).toBe(false);
  });

  it("returns false if there is no form data", () => {
    expect(validateFormData()).toBe(false);
  });
});
