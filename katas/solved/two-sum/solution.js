const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i += 1) {
    const result = numbers.indexOf(target - numbers[i], i + 1);
    if (result !== -1) return [i, result];
  }
  return null;
};

export default twoSum;
