import * as fs from "fs";

const solution = (data) => {
  const getGroups = (line) => {
    const inGroups = [];
    const outGroups = [];
    const stack = [];
    [...line].forEach((symbol, index) => {
      if (index === line.length - 1) {
        stack.push(symbol);
        outGroups.push(stack.join(""));
      }
      if (symbol === "[") {
        outGroups.push(stack.join(""));
        stack.length = 0;
      } else if (symbol === "]") {
        inGroups.push(stack.join(""));
        stack.length = 0;
      } else {
        stack.push(symbol);
      }
    });
    return { inGroups, outGroups };
  };
  const isIncludePair = (line) => {
    for (let i = 0; i < line.length - 3; i += 1) {
      const currentItem = line[i];
      const nextItem = line[i + 1];
      const nextItemReversed = line[i + 2];
      const currentItemReversed = line[i + 3];
      if (
        currentItem !== nextItem &&
        currentItem === currentItemReversed &&
        nextItem === nextItemReversed
      ) {
        return true;
      }
    }
    return false;
  };
  const groups = getGroups(data);
  return (
    groups.inGroups.every((value) => !isIncludePair(value)) &&
    groups.outGroups.some((value) => isIncludePair(value))
  );
};

export default solution;

fs.readFile("07.txt", "utf-8", (err, data) => {
  const res = data.split("\n");
  const fin = res.reduce((p, c) => p + (solution(c) ? 1 : 0), 0);
  console.log(fin);
});
