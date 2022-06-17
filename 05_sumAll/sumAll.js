const sumAll = function (number1, number2) { // const error = 'ERROR';
    if (! number1 || ! number2 < 0 || number1 == undefined || number2 == undefined) {
        return String('ERROR');
    }
    if (number1 || number2 >= 0) { // let finalSum = sumAll();

        if (number1 > number2) {
            return number1IsGreaterThanNumber2();
        }

        if (number2 > number1) {
            return number2IsGreaterThanNumber1();
        }

        let compareInputs = function (number1IsGreaterThanNumber2, number2IsGreaterThanNumber1) {
            if (number1IsGreaterThanNumber2 == true) {
                return highestInput == number1;
            } else if (number2IsGreaterThanNumber1 == true) {
                return highestInput == number2;
            }
        }

        let highestInput = [];

        function number1IsGreaterThanNumber2() {
            for (let count = 0; count < highestInput; count++) {
                number1 + count + compareInputs;
                return sumAll();
            }
        }

        function number2IsGreaterThanNumber1() {
            for (let count = 0; count < highestInput; count++) {
                number2 + count + compareInputs;
                return sumAll();
            }
        }

        // let finalSum() = compareInputs + count;
    }
}

// Do not edit below this line
module.exports = sumAll;
