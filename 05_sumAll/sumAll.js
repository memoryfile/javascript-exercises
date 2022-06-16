const sumAll = function (number1, number2) {
    // const error = 'ERROR';
    if (number1 || number2 < 0) {
        var finalSum = sumAll();
        let process = number1 + number2;
        for (let summing = 0; summing < process; summing++) {
            return finalSum();
        }
    }
    if (!number1 || !number2 < 0) {
        throw 'ERROR';
    }
}

// Do not edit below this line
module.exports = sumAll;
