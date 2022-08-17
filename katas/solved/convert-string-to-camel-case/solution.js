const toCamelCase = (str) => {
  const bannedSymbols = ["-", "_"];
  if (str.length === 0) return "";
  return str
    .split("")
    .map((element, index) => {
      if (bannedSymbols.includes(index > 1 && str[index - 1])) {
        return element.toUpperCase();
      }
      return element;
    })
    .filter((value) => {
      return !bannedSymbols.includes(value);
    })
    .join("");
};

export default toCamelCase;
