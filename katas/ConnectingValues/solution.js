export const connectedValues = (arr, val, coord) => {};
export const directionName = {
  top: "top",
  topRight: "topRight",
  right: "right",
  bottomRight: "bottomRight",
  bottom: "bottom",
  bottomLeft: "bottomLeft",
  left: "left",
  topLeft: "topLeft",
};

export const getDirectionsAbleForMove = (arrSize, coord) => {
  const moveCheck = {
    top: coord.y > 0,
    right: coord.x < arrSize.width - 1,
    bottom: coord.y < arrSize.height - 1,
    left: coord.x > 0,
  };
  const moveIsAble = [
    { direction: directionName.top, able: moveCheck.top },
    {
      direction: directionName.topRight,
      able: moveCheck.top && moveCheck.right,
    },
    { direction: directionName.right, able: moveCheck.right },
    {
      direction: directionName.bottomRight,
      able: moveCheck.bottom && moveCheck.right,
    },
    { direction: directionName.bottom, able: moveCheck.bottom },
    {
      direction: directionName.bottomLeft,
      able: moveCheck.bottom && moveCheck.left,
    },
    { direction: directionName.left, able: moveCheck.left },
    {
      direction: directionName.topLeft,
      able: moveCheck.top && moveCheck.left,
    },
  ];
  return moveIsAble
    .filter((value) => value.able === true)
    .map((value) => value.direction);
};
