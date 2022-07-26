const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const getSum = (a, b) => {
  return range(Math.min(a, b), Math.max(a, b), 1).reduce((p, c) => p + c);
};

export default getSum;
