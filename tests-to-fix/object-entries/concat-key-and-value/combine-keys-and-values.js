const combineKeysAndValues = (object) => {
  const stringsToReturn = [];
  for (const keyAndValue of Object.entries(object)) {
    const combinedKeyValue = keyAndValue.key + " - " + keyAndValue.value;
    stringsToReturn.push(combinedKeyValue);
  }

  return stringsToReturn;
};

export default combineKeysAndValues;
