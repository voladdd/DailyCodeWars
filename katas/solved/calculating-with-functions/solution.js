const calculation = (leftOperand, centerRight) => {
  const rightOperand = parseInt(centerRight[1], 10);
  const operations = {
    "/": Math.floor(leftOperand / rightOperand),
    "+": leftOperand + rightOperand,
    "*": leftOperand * rightOperand,
    "-": leftOperand - rightOperand,
  };
  return operations[centerRight[0]];
};

const f = (value, operation) =>
  typeof operation === "undefined" ? value : calculation(value, operation);

export const zero = (operation) => f(0, operation);
export const one = (operation) => f(1, operation);
export const two = (operation) => f(2, operation);
export const three = (operation) => f(3, operation);
export const four = (operation) => f(4, operation);
export const five = (operation) => f(5, operation);
export const six = (operation) => f(6, operation);
export const seven = (operation) => f(7, operation);
export const eight = (operation) => f(8, operation);
export const nine = (operation) => f(9, operation);

export const plus = (value) => `+${value}`;
export const minus = (value) => `-${value}`;
export const times = (value) => `*${value}`;
export const dividedBy = (value) => `/${value}`;
