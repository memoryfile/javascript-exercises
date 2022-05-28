const reverseString = function(word) {
   
    // Create empty array
    const reverseArray = [];
    const length = word.length - 1;

    // Loop from end
    for (let i = length; i >= 0; i--) {
        reverseArray.push(word[i]);

    // Join array elements
    return reverseArray.join('');
    }
};

// Do not edit below this line
module.exports = reverseString;
