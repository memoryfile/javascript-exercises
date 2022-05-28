const repeatString = function(word, times) { // define `word` and `times` inside the function itself without needing a separate `let`
        if (times < 0) return 'ERROR'; // if the number is less than 0, return an error
        let string = ''; // string = a blank string
        for (let i = 0; i < times; i++) { // basic for loop
            string += word; // concatenates the heys
    }
    return string; // returns everything after concatenation
};

// Do not edit below this line
module.exports = repeatString;
