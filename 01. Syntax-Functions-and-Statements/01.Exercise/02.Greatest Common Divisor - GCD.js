/*jshint esversion: 6*/

function gcd(a, b) {
    let copiedA = a;
    let copiedB = b;

    while (copiedB !== 0) {
        //Traditional
        // let tempNumber = copiedA % copiedB;
        // copiedA = copiedB;
        // copiedB = tempNumber;
        
        //With Destructuring
        [copiedA, copiedB] = [copiedB, copiedA % copiedB];
    }

    return copiedA;
}

console.log(gcd(14, 10));