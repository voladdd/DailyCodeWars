export const rotateAndRemove = (arr) => {};

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
