const convertToCelsius = function(tempInFahrenheit) {
  // C = (F - 32) * 5/9
  const tempInCelsius = (tempInFahrenheit - 32) * (5/9);
  const rounded = Math.round(tempInCelsius * 10) / 10;

  return rounded;
};

const convertToFahrenheit = function(tempInCelsius) {
  // F = (C * 9/5) + 32
  const tempInFahrenheit = (tempInCelsius * (9/5)) + 32;
  const rounded = Math.round(tempInFahrenheit * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
