const add = function (min, max) {
  return min + max;
};

const subtract = function (min, max) {
  return min - max;
};

const sum = function (array) {
  return array.length
  ? array.reduce((accumulator, nextItem) => accumulator + nextItem) //  reduce multiplies each value by the following item, and accumulator is the net result of a function
  : 0;
};

const multiply = function (array) {
  return array.length
  ? array.reduce((accumulator, nextItem) => accumulator * nextItem) //  reduce multiplies each value by the following item, and accumulator is the net result of a function
  : 0;
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (n) {
  if (n === 0) return 1;
  let input = 1;
  for (let i = n; i > 0; i--) {
  input *= i; 
  }
  return input; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
