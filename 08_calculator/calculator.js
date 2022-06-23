const add = function (min, max) {
  return min + max;
};

const subtract = function (min, max) {
  return min - max;
};

const sum = function (input) {
  // const array = [input];

  for (let i = 0; i < input; i++) {
    sum += input[i];
  }
};

const multiply = function (input) {};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (input) {
  return input * (input - 1);
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
