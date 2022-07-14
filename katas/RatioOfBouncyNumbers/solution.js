/**
 * @param  {number} number
 */
export const IsBouncy = (number) => {
  const numbers = number.toString().split("");
  let status = "asc";
  let changedTimes = 0;
  let newStatus;
  for (let i = 0; i < numbers.length - 1; i++) {
    let a = numbers[i];
    let b = numbers[i + 1];
    if (a !== b) {
      if (a < b) newStatus = "asc";
      else if (a > b) newStatus = "desc";
      if (status !== newStatus) {
        status = newStatus;
        changedTimes++;
        if (changedTimes > 0 && i > 0) return true;
      }
    }
  }
  return false;
};

export const convertFloat = (float, afterZero, accuracy) =>
  Math.floor(float * (afterZero * accuracy)) / accuracy;

export const maxAccuracyTen = (float) => convertFloat(float, 100, 100);

export const bouncyRatio = (percent) => {
  let countBounce = 0;
  let countUnBounce = 0;
  let number = 0;
  do {
    IsBouncy(number) ? countBounce++ : countUnBounce++;
    number++;
  } while (
    maxAccuracyTen(countBounce / (countBounce + countUnBounce)) <
    maxAccuracyTen(percent)
  );
  return number;
};
