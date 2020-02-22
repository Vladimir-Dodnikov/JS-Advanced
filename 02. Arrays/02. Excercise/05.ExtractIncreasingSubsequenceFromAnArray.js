/*jshint esversion: 6*/

function exrtractFromAnArray(input) {
    const arr = [];
    arr[0] = input[0];
    for (let i = 1; i <= input.length; i++) {
        let element = input[i];
        let currentArrElement = arr.pop(i);

        if (element >= currentArrElement) {
            arr.push(currentArrElement);
            arr.push(element);
        } else {
            arr.push(currentArrElement);
        }
    }
    for (const el of arr) {
        console.log(el);
    }
}

exrtractFromAnArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]);
exrtractFromAnArray([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );