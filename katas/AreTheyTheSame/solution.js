export const comp = (array1, array2) => {
  //select iterately item from array1

  // array1.forEach((value1) => {
  //   let finded = array2.filter((value2, index) => {
  //     if (
  //       array2.findIndex(
  //         (valueToFind) =>
  //           valueToFind === value1 || valueToFind === value1 * value1
  //       ) !== index
  //     ) {
  //       return value2;
  //     }
  //   });
  // });

  return array1.every(
    (value) => array2.includes(value) || array2.includes(value * value)
  );

  //find in array2 equal item OR square of this item
  //if item finded remove it from array2
  //  go to the next iterately item
  //  if theere is no next items then return true
  //else return false that these arrays are not equal
};
