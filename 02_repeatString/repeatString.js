const repeatString = function(work, n) {
  if (n < 0) {
    return "ERROR"
  } else {
    let finalWord = ""
  for (let i = 0; i < n; i++) {
    finalWord += work
  }
  return finalWord
  }
};

// Do not edit below this line
module.exports = repeatString;
