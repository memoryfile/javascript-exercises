const sumAll = function (number1, number2) { // const error = 'ERROR';
    if (! number1 || ! number2 < 0 || number1 == undefined || number2 == undefined) {
        return String('ERROR');
    }
    if (number1 || number2 >= 0) {
        let finalSum = sumAll();

        function compareInputs() {
            if (number1 > number2) 
                return number1;
             else {
                return number2;
            }
        }

        let highestInput = [];

        if (number2 == highestInput) {
            for (let count = 0; count < highestInput; count++) {
                number1 + count + compareInputs;
                return finalSum();
            }
        }
        // let finalSum() = compareInputs + count;
    }
}

// Do not edit below this line
module.exports = sumAll;
