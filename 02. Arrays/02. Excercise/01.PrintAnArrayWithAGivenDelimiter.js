/*jshint esversion: 6*/

function solve(input) {
    let delimiter = input[input.length-1];
    let output = '';
    for (let i = 0; i < (input.length); i++) {
        let element = input[i];

        if (i == (input.length-2)) {
            output += element;
            break;
        }
        output += element + delimiter;
    }
    console.log(output);

    // let delimeter = input.pop();
    // console.log(input.join(delimiter));
}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);
solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']
);