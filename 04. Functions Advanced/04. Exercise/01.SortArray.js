let sortArray = function (arr, command) {
    let sortCommand = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    };
    return arr.sort(sortCommand[command]);
}

console.log(sortArray(
    [14, 7, 17, 6, 8],
    'asc'
));