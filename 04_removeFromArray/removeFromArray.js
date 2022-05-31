const removeFromArray = function (...args) {
    const array = args[0]; // rest parameter
    const myArray = []; // create empty array
    array.forEach((item) => {
        if (!args.includes(item)) { // if the args don't include an item..
            myArray.push(item); // add one or more element to the end of the array
        }
    });

    return myArray;

}; // Do not edit below this line
module.exports = removeFromArray;
