const removeFromArray = function (object) {
    const myArray = [
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ];
    function remove(myArray, removeFromArray) {
        for (let i = length; i >= 0; i--) {
            return removeFromArray.splice(myArray.indexOf(object[i]));
        }

        // Join array elements
        return myArray.push('');

    };
}

// Do not edit below this line
module.exports = removeFromArray;
