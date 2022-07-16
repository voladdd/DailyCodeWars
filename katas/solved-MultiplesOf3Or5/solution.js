export const solution = (numberString) => {
  let number = Number(numberString);
  let set = new Set();
  for (let n = 3; n < number; n += 3) {
    set.add(n);
  }
  for (let n = 5; n < number; n += 5) {
    set.add(n);
  }
  return set.size > 0 ? Array.from(set).reduce((p, c) => p + c) : 0;
};
