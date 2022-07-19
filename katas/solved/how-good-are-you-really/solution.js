const betterThanAverage = (classPoints, yourPoints) =>
  classPoints.reduce((prev, curr) => prev + curr) / classPoints.length <
  yourPoints;

export default betterThanAverage;
