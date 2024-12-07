const removeFromArray = function(testArray, ...itemToRemove) {
  for (let i = 0; i <= itemToRemove.length; i++) {
    let test = itemToRemove[i]
    for(let n = 0; n <= testArray.length; n++){
      if(testArray[n] === test) {
        testArray.splice(n, 1)
        for(let c = 0; c <= testArray.length; c++) {
          if(testArray[n] === test) {
            testArray.splice(n, 1)
          }
        }
      }
    }
  }
  return testArray
};

// Do not edit below this line
module.exports = removeFromArray;
