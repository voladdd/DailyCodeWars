import md5 from "md5";

const solution = (key) => {
  const checkFiveZeros = (line) => line.slice(0, 5) === "00000";
  const hash = [];
  hash[7] = undefined;
  let count = 0;
  let keyForHash;
  let newKey;
  let placeIndex;
  let placeValue;
  while (hash.includes(undefined) && count < Number.MAX_SAFE_INTEGER) {
    keyForHash = key + count;
    newKey = md5(keyForHash);
    placeIndex = Number(newKey[5]);
    placeValue = [...newKey[6]];
    if (
      checkFiveZeros(newKey) &&
      placeIndex <= 7 &&
      hash[placeIndex] === undefined
    ) {
      console.log(keyForHash);
      console.log(placeValue);
      [hash[placeIndex]] = placeValue;
    }
    count += 1;
  }
  return hash.join("");
};

const key = "fkylfhsq";
console.log(solution(key));
