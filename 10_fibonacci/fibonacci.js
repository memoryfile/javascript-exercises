const fibonacci = function(array) {
    return array.length
    ? array.reduce((accumulator, nextItem) => accumulator + nextItem) //  reduce multiplies each value by the following item, and accumulator is the net result of a function
    : "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
