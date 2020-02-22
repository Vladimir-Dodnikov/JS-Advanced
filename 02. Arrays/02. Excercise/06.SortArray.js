/*jshint esversion: 6*/

function sortArray(input) {
    const sortedArr = input.sort(function sortByLength(a, b) {
        return a.length - b.length || // sort by length, if equal then
         a.localeCompare(b);          // sort by dictionary order
    });
    for (const element of sortedArr) {
        console.log(element);
    }
}

sortArray(['alpha', 
'beta', 
'gamma']);

sortArray(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);