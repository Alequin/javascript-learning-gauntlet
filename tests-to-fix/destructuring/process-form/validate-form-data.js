const validateFormData = (formData) => {
  const { firstName, lastName, dateOfBirth, place } = formData;

  if (firstName && lastName && dateOfBirth && place) return true;
  return false;
};

export default validateFormData;
