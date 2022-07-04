export const solution = (numberString) => {
  let number = Number(numberString);
  let set = new Set();
  for (let n = 3; n < number; n++) {
    if ((n % 3 === 0 || n % 5 === 0) && n > 0) set.add(n);
  }
  return set.size > 0 ? Array.from(set).reduce((p, c) => p + c) : 0;
};
