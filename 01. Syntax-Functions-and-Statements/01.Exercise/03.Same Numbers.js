/*jshint esversion: 6*/

function solveEqualNumber(number) {
    let numToString = number.toString();
    let sum = 0;
    let isTrue = false;

    for (let i = 0; i < numToString.length; i++) {
        let digit = +numToString[0];
        let nextDigit = +numToString[i];

        // isTrue = digit === nextDigit;
        // if (isTrue) {
        //     sum += nextDigit;
        // }
        if (digit === nextDigit) {
            sum += nextDigit;
            isTrue = true;
        } else {
            sum += nextDigit;
            isTrue = false;
        }
    }
    console.log(isTrue);
    console.log(sum);
}

console.log(solveEqualNumber(1234));
console.log(solveEqualNumber(2222));