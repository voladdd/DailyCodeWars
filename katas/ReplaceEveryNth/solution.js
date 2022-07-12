/**
 * @param  {string} text
 * @param  {number} n
 * @param  {string} oldValue
 * @param  {string} newValue
 */
export const replaceNth = (text, n, oldValue, newValue) => {
  let nth = 0;
  return text.split("").reduce((previousValue, currentValue) => {
    let equality = currentValue === oldValue || previousValue === oldValue;
    if (equality) nth++;
    return equality && nth % n === 0 && n > -1
      ? previousValue + newValue
      : previousValue + currentValue;
  });
};
