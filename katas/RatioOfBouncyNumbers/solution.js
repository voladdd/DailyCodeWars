export const IsBouncy = (number) => {
  let inc = false;
  let dec = false;
  let last = number % 10;
  number = Math.floor(number / 10);

  while (number > 0) {
    let next = number % 10;
    number = Math.floor(number / 10);
    if (next < last) inc = true;
    else if (next > last) dec = true;
    last = next;
    if (dec && inc) return true;
  }

  return dec && inc;
};

export const convertFloat = (float, afterZero, accuracy) =>
  Math.floor(float * (afterZero * accuracy)) / accuracy;

export const maxAccuracyTen = (float) => convertFloat(float, 100, 100);

export const bouncyRatio = (percent) => {
  if (percent == 0) return 1;
  let i = 99;
  let bouncies = 0;
  while (100 * bouncies < maxAccuracyTen(percent) * i) {
    i++;
    if (IsBouncy(i)) bouncies++;
  }
  return i;
};
