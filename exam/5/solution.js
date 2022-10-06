import * as fs from "fs";

const solution = (data) => {
  let flag = true;
  let symbols = data.split("");
  while (flag) {
    flag = false;
    // console.log(symbols);
    if (symbols.length >= 2) {
      for (let i = 0; i < symbols.length - 1; i += 1) {
        if (
          (symbols[i] === symbols[i + 1].toUpperCase() ||
            symbols[i] === symbols[i + 1].toLowerCase()) &&
          symbols[i] !== symbols[i + 1]
        ) {
          symbols = symbols.filter(
            (v, index) => index !== i && index !== i + 1
          );
          flag = true;
          break;
        }
      }
    }
  }
  return symbols.join("");
};

export default solution;

fs.readFile("05.txt", "utf-8", (err, data) => {
  const res = solution(data);
  console.log(res);
  console.log(res.length);
  //   remove empty space - 1
});
