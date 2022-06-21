// const number1IsGreaterThanNumber2 = new(Boolean);

// const number2IsGreaterThanNumber1 = new(Boolean);

const sumAll = function (number1, number2) {
    if (! number1 || ! number2 < 0 || number1 === undefined || number2 === undefined) {
        return String('ERROR');
    }
    if (isNaN(number1 || number2)) {
        return String('ERROR');
    }
    if (sumAll(Array.isArray)) {
        return String('ERROR');
    }

    let finalSum = 0;

    // if (number1 >= 0 && number2 >= 0) {
    //     if (! number1 == NaN || ! number2 == NaN) {

    // function addInputs(number1, number2) {
    //     if (number1 > number2) {
    //         return number1 + number2;
    //     }
    //     if (number2 > number1) {
    //         return number2 + number1;
    //     }
    // }

        if (number1 > number2) {
            for (let count = 0; count <= number1; count++) {
                return finalSum + count && console.log(finalSum);
            }
        }

        if (number2 > number1) {
            for (let count = 0; count <= number2; count++) {
                return finalSum + count && console.log(finalSum);
            }
        }
    };

    // Do not edit below this line
    module.exports = sumAll;
