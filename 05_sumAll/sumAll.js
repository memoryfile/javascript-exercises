// const number1IsGreaterThanNumber2 = new(Boolean);

// const number2IsGreaterThanNumber1 = new(Boolean);

const sumAll = function (number1, number2) { // const error = 'ERROR';
    if (! number1 || ! number2 < 0 || number1 == undefined || number2 == undefined) {
        return String('ERROR');
    }
    if (isNaN(number1 || number2)) {
        return String('ERROR');
    }
    if (number1 && number2 >= 0) {

        // if (number1 > number2) {
        //     return number1IsGreaterThanNumber2();
        // }

        // if (number2 > number1) {
        //     return number2IsGreaterThanNumber1();
        // }

    function addInputs(number1, number2) {
        return number1 + number2;
    }

        // let compareInputs = function (number1IsGreaterThanNumber2, number2IsGreaterThanNumber1) {
        //     if (number1IsGreaterThanNumber2 == true) {
        //         // return highestInput = number1;
        //         return highestInput;
        //     } else if (number2IsGreaterThanNumber1 == true) {
        //         // return highestInput = number2;
        //         return highestInput;
        //     }
        // }

        // let highestInput = compareInputs.

        if (number1 > number2) {
            for (let count = 0; count < number1; count++) {
                return sumAll(addInputs + count);
            }
        }

        if (number2 > number1) {
            for (let count = 0; count < number2; count++) {
                return sumAll(addInputs + count);
            }
        }

    }
}

// Do not edit below this line
module.exports = sumAll;
