export const rotateAndRemove = (arr) => {
  if (arr.length > 1) {
    return rotateAndRemove(
      rotateArray(arr).map((value) => removeMaxAndMin(value))
    );
  } else {
    return arr[0][0];
  }
};

export const rotateArray = (arr) => {
  let width = arr.length;
  let height = arr[0].length;
  let result = [];
  for (let x = 0; x < height; x++) {
    let collect = [];
    for (let y = 0; y < width; y++) {
      collect.push(arr[y][x]);
    }
    result.unshift(collect);
  }
  return result;
};

export const removeMaxAndMin = (arr) => {
  let sorted = [...arr].sort((a, b) => a - b);
  return removeItemFromArray(
    removeItemFromArray(arr, sorted[0]),
    sorted[arr.length - 1]
  );
};

export const removeItemFromArray = (arr, item) => {
  return arr
    .slice(0, arr.indexOf(item))
    .concat(arr.slice(arr.indexOf(item) + 1, arr.length));
};
