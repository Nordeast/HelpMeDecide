function createNode() {}

function bracketize(items) {
  var halfLength = Math.ceil(items.length / 2);
  var left = items.slice(0, halfLength);
  var right = items.slice(halfLength, items.length);

  var coinFlip = 0;
  var leftNode = {};
  if (left.length === 1) {
    leftNode = {
      base: true,
      leftValue: left[0],
      winner: left[0]
    };
  } else if (left.length === 2) {
    coinFlip = Math.floor(Math.random() * Math.floor(2));
    leftNode = {
      base: true,
      leftValue: left[0],
      rightValue: left[1],
      flipResult: coinFlip,
      winner: left[coinFlip],
      loser: left[1 - coinFlip]
    };
  } else {
    leftNode = bracketize(left);
  }

  var rightNode = {};
  if (right.length === 1) {
    rightNode = {
      base: true,
      leftValue: right[0],
      winner: right[0]
    };
  } else if (right.length === 2) {
    coinFlip = Math.floor(Math.random() * Math.floor(2));
    rightNode = {
      base: true,
      leftValue: right[0],
      rightValue: right[1],
      flipResult: coinFlip,
      winner: right[coinFlip],
      loser: right[1 - coinFlip]
    };
  } else {
    rightNode = bracketize(right);
  }

  coinFlip = Math.floor(Math.random() * Math.floor(2));
  return {
    base: false,
    left: leftNode,
    right: rightNode,
    flipResult: coinFlip,
    winner: coinFlip === 0 ? leftNode.winner : rightNode.winner,
    loser: coinFlip === 0 ? rightNode.winner : leftNode.winner
  };
}
