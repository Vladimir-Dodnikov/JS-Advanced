/*jshint esversion: 6*/

function orbit(input) {

    printMatrix(getMatrix(input));

    function getMatrix(input) {

        let matrix = [],
            [rows, cols] = [input[0], input[1]],
            [starRow, starCol] = [input[2], input[3]];

        for (let row = 0; row < rows; row++) {

            matrix[row] = [];

            for (let col = 0; col < cols; col++) {

                matrix[row][col] = 1 + Math.max(Math.abs(starRow - row), Math.abs(starCol - col));
            }
        }
        return matrix;
    }

    function printMatrix(matrix) {

        matrix.forEach(row => console.log(row.join(' ')));
        
    }
}

orbit(
    [
        4, 4, 0, 0
    ]
);

orbit(
    [
        5, 5, 2, 2
    ]
);

orbit(
    [
        3, 3, 2, 2
    ]
);