"use strict";
function calculator(number1, number2, operator) {
    let result;
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else if (operator == '/') {
        result = number1 / number2;
    }
    else {
        throw RangeError(`input ${operator}  is not expected \n the operator must be an +,-,*,/`);
    }
    return result;
}
try {
    calculator(3, 9, '%');
}
catch (error) {
    if (error instanceof RangeError) {
        console.log(error.message);
    }
}
