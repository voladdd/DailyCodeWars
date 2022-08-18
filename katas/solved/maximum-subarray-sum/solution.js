const maxSequence = (arr) => {
  if (arr.length === 0 || arr.every((value) => value < 0)) return 0;
  if (arr.every((value) => value > 0)) return arr.reduce((p, c) => p + c);
  let maxSum = 0;
  arr.forEach((element, index) => {
    const lastIndex = arr.length;
    let sum = maxSum;
    let count = lastIndex;
    while (count > 0) {
      sum = arr.slice(index, count).reduce((p, c) => p + c, 0);
      if (sum > maxSum) maxSum = sum;
      count -= 1;
    }
  });
  return maxSum;
};

export default maxSequence;
