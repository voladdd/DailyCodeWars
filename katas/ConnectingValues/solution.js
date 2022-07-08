export const directionInfo = {
  top: {
    name: "top",
    moveOn: {
      x: 0,
      y: -1,
    },
  },
  topRight: {
    name: "topRight",
    moveOn: {
      x: 1,
      y: -1,
    },
  },
  right: {
    name: "right",
    moveOn: {
      x: 1,
      y: 0,
    },
  },
  bottomRight: {
    name: "bottomRight",
    moveOn: {
      x: 1,
      y: 1,
    },
  },
  bottom: {
    name: "bottom",
    moveOn: {
      x: 0,
      y: 1,
    },
  },
  bottomLeft: {
    name: "bottomLeft",
    moveOn: {
      x: -1,
      y: 1,
    },
  },
  left: {
    name: "left",
    moveOn: {
      x: -1,
      y: 0,
    },
  },
  topLeft: {
    name: "topLeft",
    moveOn: {
      x: -1,
      y: -1,
    },
  },
};

export const getDirectionsAbleForMove = (arrSize, coord) => {
  const moveCheck = {
    top: coord.y > 0,
    right: coord.x < arrSize.width - 1,
    bottom: coord.y < arrSize.height - 1,
    left: coord.x > 0,
  };
  const moveIsAble = [
    { direction: directionInfo.top, able: moveCheck.top },
    {
      direction: directionInfo.topRight,
      able: moveCheck.top && moveCheck.right,
    },
    { direction: directionInfo.right, able: moveCheck.right },
    {
      direction: directionInfo.bottomRight,
      able: moveCheck.bottom && moveCheck.right,
    },
    { direction: directionInfo.bottom, able: moveCheck.bottom },
    {
      direction: directionInfo.bottomLeft,
      able: moveCheck.bottom && moveCheck.left,
    },
    { direction: directionInfo.left, able: moveCheck.left },
    {
      direction: directionInfo.topLeft,
      able: moveCheck.top && moveCheck.left,
    },
  ];
  let withFilter = moveIsAble.filter((value) => value.able === true);
  if (withFilter.length > 0) {
    return withFilter.map((value) => value.direction);
  } else {
    return null;
  }
};

export const connectedValues = (arr, val, coord) => {
  let history = [];
  const moveThroghConnectedValues = (arr, val, coord) => {
    let coordX = coord[1];
    let coordY = coord[0];
    let directions = getDirectionsAbleForMove(
      { width: arr[0].length, height: arr.length },
      { x: coordX, y: coordY }
    ).filter((direction) => {
      return (
        arr[coordY + direction.moveOn.y][coordX + direction.moveOn.x] === val
      );
    });
    if (directions != null) {
      directions.forEach((direction) => {
        let newCoordY = coordY + direction.moveOn.y;
        let newCoordX = coordX + direction.moveOn.x;
        if (
          history.every(
            (oldCoord) => oldCoord.toString() != [newCoordY, newCoordX]
          )
        ) {
          history.push([coordY, coordX]);
          return moveThroghConnectedValues(arr, val, [newCoordY, newCoordX]);
        }
      });
    }
  };
  moveThroghConnectedValues(arr, val, coord);
  return history;
};
