const leapYears = function(n) {
  if(n % 400 === 0) {
    return true
  }
  if(n % 4 === 0 && n % 100 != 0) {
    return true
  }
  return false
};

// Do not edit below this line
module.exports = leapYears;
