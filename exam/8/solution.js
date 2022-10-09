import * as fs from "fs";

let sum = 0;

const solution = (data) => {
  const screen = [
    Array(50).fill("."),
    Array(50).fill("."),
    Array(50).fill("."),
    Array(50).fill("."),
    Array(50).fill("."),
    Array(50).fill("."),
  ];

  const parseCreateRectangle = (line) => {
    // sample: rect 3x2
    const startIndex = line.indexOf(" ");
    const xIndex = line.indexOf("x");
    const width = Number(line.slice(startIndex + 1, xIndex));
    const height = Number(line.slice(xIndex + 1));
    return { width, height };
  };
  const parseRotateColumn = (line) => {
    // sample: rotate column x=8 by 1
    const column = Number(line.match(/x=\d+/g).join("").replace(/x=/g, ""));
    const by = Number(
      line
        .match(/by \d+/g)
        .join("")
        .replace(/by /g, "")
    );
    return { column, by };
  };
  const parseRotateRow = (line) => {
    // sample: rotate row y=0 by 10
    const row = Number(line.match(/y=\d+/g).join("").replace(/y=/g, ""));
    const by = Number(
      line
        .match(/by \d+/g)
        .join("")
        .replace(/by /g, "")
    );
    return { row, by };
  };

  const executeCreateRectangle = (width, height) => {
    sum += width * height;
    for (let x = 0; x < height; x += 1) {
      for (let y = 0; y < width; y += 1) {
        screen[x][y] = "#";
      }
    }
  };
  const executeRotateColumn = (column, by) => {
    const stack = [];
    for (let x = 0; x < screen.length; x += 1) {
      if (screen[x][column] === "#") {
        stack.push((x + by) % screen.length);
        screen[x][column] = ".";
      }
    }
    stack.forEach((value) => {
      screen[value][column] = "#";
    });
  };
  const executeRotateRow = (row, by) => {
    const stack = [];
    for (let y = 0; y < screen[0].length; y += 1) {
      if (screen[row][y] === "#") {
        stack.push((y + by) % screen[0].length);
        screen[row][y] = ".";
      }
    }
    stack.forEach((value) => {
      screen[row][value] = "#";
    });
  };

  const execute = (commands) => {
    commands.split("\n").forEach((command) => {
      // screen.forEach((value) => {
      //   console.log(value.join(""));
      // });
      // console.log("\n");
      // rotate
      if (/rotate/.test(command)) {
        // row
        if (/y=/.test(command)) {
          const { row, by } = parseRotateRow(command);
          executeRotateRow(row, by);
        } else {
          // column
          const { column, by } = parseRotateColumn(command);
          executeRotateColumn(column, by);
        }
      } else {
        // create rect
        const { width, height } = parseCreateRectangle(command);
        executeCreateRectangle(width, height);
      }
    });

    return screen;
  };

  return execute(data);
};

export default solution;

fs.readFile("08.txt", "utf-8", (err, data) => {
  let count = 0;
  solution(data).forEach((value) => {
    count += value.filter((line) => line === "#").length;
    console.log(value.join(""));
  });
  console.log(count);
  console.log(sum);
});
