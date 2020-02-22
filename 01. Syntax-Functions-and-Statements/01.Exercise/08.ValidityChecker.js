/*jshint esversion: 6*/

function solve(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let a1 = x1 - 0;
    let b1 = y1 - 0;
    let c1 = Math.sqrt(a1*a1 + b1*b1);

    if (Number.isInteger(c1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let a2 = x2 - 0;
    let b2 = y2 - 0;
    let c2 = Math.sqrt(a2*a2 + b2*b2);

    if (Number.isInteger(c2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let a3 = x1-x2;
    let b3 = y1-y2;
    let c3 = Math.sqrt(a3*a3 + b3*b3);

    if (Number.isInteger(c3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);