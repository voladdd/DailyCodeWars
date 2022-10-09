const solution = (data) => {
  let count = 1;
  const newArray = [];
  for (let i = 0; i < data.length; i += 1) {
    let index = i;
    while (index < data.length - 1 && data[i] === data[index + 1]) {
      count += 1;
      index += 1;
    }
    newArray.push(count, data[i]);
    i = index;
    count = 1;
  }
  return newArray.join("");
};

export default solution;

let solved = solution("1113222113");
for (let i = 0; i < 40 - 1; i += 1) {
  solved = solution(solved);
}
console.log(solved);
console.log(solved.length);
