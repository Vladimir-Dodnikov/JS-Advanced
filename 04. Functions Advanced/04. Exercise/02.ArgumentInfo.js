let getInfo = function (input) {
    let typeCounter = {};
    for (const argument of arguments) {
        let type = typeof argument;
        
        if (!typeCounter[type]) {
            typeCounter[type] = 0;
        }

        typeCounter[type]++;

        console.log(`${type}: ${argument}`);
    }
    let sortedTypeCounter = [...Object.keys(typeCounter)].sort((a,b)=> typeCounter[b]-typeCounter[a]);

    for (const type of sortedTypeCounter) {
        console.log(`${type} = ${typeCounter[type]}`);
    }
}
getInfo({ name: 'bob'}, 3.333, 9.999);

// getInfo(
//     'cat',
//     42,
//     function () {console.log('Hello world!');})