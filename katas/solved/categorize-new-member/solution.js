const openOrSenior = (data) => {
  return data.map((value) =>
    value[0] >= 55 && value[1] > 7 ? "Senior" : "Open"
  );
};

export default openOrSenior;
