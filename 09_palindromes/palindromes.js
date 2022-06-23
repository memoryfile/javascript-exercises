const palindromes = function (string) {
  let unwanted = /[^A-Za-z0–9]/g; // Best way to remove punctuation etc.
  const lowerReplaceString = string.toLowerCase().replace(unwanted, ""); // Lowercase the string and remove unwanted aspects of it
  const reverseString = lowerReplaceString.split("").reverse().join(""); // Split string, reverse it, and join it together again
  return reverseString === lowerReplaceString; // Confirm the aforementioned
};

// Do not edit below this line
module.exports = palindromes;
