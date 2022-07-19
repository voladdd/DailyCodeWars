const comp = (array1, array2) => {
  if (array2 === null || array1 === null) return false;
  let filteredArray = array2;
  array1.sort().forEach((value1) => {
    let firstFindedIndex = filteredArray.findIndex(
      (valueToFind) => valueToFind === value1 || valueToFind === value1 * value1
    );
    filteredArray = filteredArray.filter(
      (value2, index) => index !== firstFindedIndex
    );
  });
  return filteredArray.length === 0;
};

export default comp;
