/*jshint esversion: 6*/

function rotateArray(input) {
    let count = +input[input.length - 1];
    let rotations = (count % (input.length - 1)); //time limit!
    
    input.pop(input[input.length - 1]);

    for (let i = 0; i < rotations; i++) {
        let lastElement = input[input.length - 1];
        input.pop(lastElement);
        input.unshift(lastElement);
    }
    console.log(input.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4',
    '2'
]);
rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
]);