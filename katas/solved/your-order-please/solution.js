const order = (words) => {
  return words
    .split(" ")
    .sort((a, b) => {
      const A = a[a.search(/\d/)];
      const B = b[b.search(/\d/)];
      if (A < B) return -1;
      if (A > B) return 1;
      return 0;
    })
    .join(" ");
};

export default order;
