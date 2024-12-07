const reverseString = function(stringToBeReversed) {
  let holdingArray = stringToBeReversed.split("")
  let secondHoldingArray = []
  for (let i = 0; i < stringToBeReversed.length; i ++) {
    let holdingVariable = holdingArray.pop()
    secondHoldingArray.push(holdingVariable)
  }
  return secondHoldingArray.join("")
};

// Do not edit below this line
module.exports = reverseString;
