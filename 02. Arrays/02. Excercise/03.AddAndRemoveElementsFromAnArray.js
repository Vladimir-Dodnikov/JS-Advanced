/*jshint esversion: 6*/

function arrManipulate(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {

        let element = input[i];

        switch (element) {
            case 'add':
                arr.push(i + 1);
                break;
            case 'remove':
                arr.pop(i);
                break;
        }
    }

    if (arr.length === 0) {
        console.log('Empty');
    }

    for (const elem of arr) {
        console.log(elem);
    }
}

arrManipulate(['add', 'add', 'add', 'add']);
arrManipulate(['add', 'add', 'remove', 'add','add']);
arrManipulate(['remove', 'remove', 'remove']);