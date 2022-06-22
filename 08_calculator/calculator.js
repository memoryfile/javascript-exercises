const add = function (min, max) {
  return min + max;
};

const subtract = function (min, max) {
  return min - max;
};

const sum = function (input) {
  const array = [input];

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
};

const multiply = function (min, max) {
  return min * max;
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
