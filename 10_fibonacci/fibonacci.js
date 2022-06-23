const fibonacci = function (input) {
  if (input < 0) return "OOPS"; // Refuse negative numbers
  if (input === 0) return 0; // Prevent infinite loop
  let a = 0; // Number 0 in fibbonacci sequence (so 1 remains the 2nd member of the fibbonacci sequence)
  let b = 1; // First member of the fibbonacci sequence

  for (let i = 1; i < input; i++) {
    const temp = b; // temp holds b's variable as it was before
    b = a + b; // b becomes a + b added together
    a = temp; // a turns into b's variable as it was before (so JS knows the previous number in the sequence)
  }
  return b; // b is input's selected member of the sequence
};

// Do not edit below this line
module.exports = fibonacci;