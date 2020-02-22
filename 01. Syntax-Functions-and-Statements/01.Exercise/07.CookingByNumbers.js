/*jshint esversion: 6*/

function cookByNumbers(input) {
    let number = +input[0];
    for (let i = 1; i <= input.length; i++) {

        let element = input[i];

        switch (element) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number -= number * 0.2;
                console.log(number);
                break;
        }
    }
}

cookByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);