const sumAll = function(start, end) {
  let total = 0
  if( start < 0 || end < 0) {
    return "ERROR"
  }
  if(Number.isInteger(start) != true) {
    return "ERROR"
  }
  if(Number.isInteger(end) != true) {
    return "ERROR"
  }
  if(end < start) {
    for(end; end <= start; end++) {
      total += end
    }
  } else {
    for(start; start <= end; start++) {
    total += start
    }
  }  
  return total
};

// Do not edit below this line
module.exports = sumAll;
