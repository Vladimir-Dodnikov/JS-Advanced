/*jshint esversion: 6*/

function printNthElement(input) {
    let step = +input[input.length-1];

    for (let i = 0; i < input.length-1; i+=step) {
        const element = input[i];
        console.log(element);
    }
}

printNthElement(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);
printNthElement(['dsa',
'asd', 
'test', 
'tset', 
'2']
);
printNthElement(['1', 
'2',
'3', 
'4', 
'5', 
'6']
);