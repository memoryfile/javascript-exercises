const fibonacci = function (input) {
  if (input == String) return parseInt(input);
  return input.length
    ? input.reduce((accumulator, nextItem) => accumulator + nextItem)
    : "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
