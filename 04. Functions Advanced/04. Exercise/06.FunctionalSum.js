function getSumFunctionally() {
    //Closure in add function
    let sum = 0;

    function add(n) {
        sum += n;
        return add;
    }
    //call-back add itself needs .toString()
    add.toString = function() {
        return sum;
    }
    return add;
}
//this is not correct
console.log(getSumFunctionally(5)(-5).toString()); //return -5
console.log(getSumFunctionally(2)(3).toString()); // return 3
//this is correct - IIFE
let add = getSumFunctionally(); // IIFE
console.log(add(5)(-5).toString()); //0, curring
console.log(add(2)(3).toString()); //5