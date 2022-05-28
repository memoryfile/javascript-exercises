const reverseString = function (word) { 
    const reverseArray = []; // Create empty array
    const length = word.length - 1; // Length is word length minus one

    // Loop from end
    for (let i = length; i >= 0; i--) { // i = word length minus one, so subtract one length every for loop
        reverseArray.push(word[i]); // with each for loop, push a letter as a word into the array
    }

        // Join array elements
        return reverseArray.join(''); // join the letters together
    };

// Do not edit below this line
module.exports = reverseString;
