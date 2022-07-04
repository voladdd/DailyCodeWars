export const getCount = (str) => {
  let matches = str.match(/[aeiou]/g);
  return matches !== null ? matches.length : 0;
};
