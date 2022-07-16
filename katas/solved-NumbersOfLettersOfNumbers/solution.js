const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
export const numbersOfLetters = (integer) => {
  const numbersOfLettersRec = (integer) => {
    let word = integer
      .toString()
      .split("")
      .reduce(
        (previousValue, currentValue) =>
          (previousValue += numbers[currentValue]),
        ""
      );
    let lengthOfWord = word.length;
    if (lengthOfWord === integer) return word;
    else return word + " " + numbersOfLettersRec(lengthOfWord);
  };
  return numbersOfLettersRec(integer).split(" ");
};
