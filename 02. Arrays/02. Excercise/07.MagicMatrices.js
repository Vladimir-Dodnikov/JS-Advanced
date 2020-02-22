/*jshint esversion: 6*/

function checkMagicMatrix(input) {

    let isMagic = true;
    let firstRowSum = input[0].reduce((a, b) => a + b);

    for (let row = 1; row < input.length; row++) {

        let currentRowSum = input[row].reduce((a, b) => a + b);

        if (currentRowSum != firstRowSum){
            isMagic = false;
        }

    }

    for (let col = 0; col < input[0].length; col++) {

        let currentColSum = 0;

        for (let row = 0; row < input.length; row++)

        currentColSum += input[row][col];

        if (currentColSum != firstRowSum) {
            isMagic = false;
        }
    }
    console.log(isMagic);
}
checkMagicMatrix(
    [
        [1, 0, 0],
        [0, 0, 0],
    ]
);
// checkMagicMatrix(
//     [
//         [4, 5, 6],
//         [6, 5, 4],
//         [5, 5, 5]
//     ]
// );
// checkMagicMatrix(
//     [
//         [11, 32, 45],
//         [21, 0, 1],
//         [21, 1, 1]
//     ]

// );
// checkMagicMatrix(
//     [
//         [1, 0, 0],
//         [0, 0, 1],
//         [0, 1, 0]

//     ]

// );