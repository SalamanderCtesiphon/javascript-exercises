const convertToCelsius = function(temp) {
  let answer = (5 / 9) * (temp - 32)
  let number = answer.toFixed(1)
   
  return Number(number)
};

const convertToFahrenheit = function(temp) {
  let answer = (9 * temp / 5) + 32
  let number = answer.toFixed(1)
  
  return Number(number)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
