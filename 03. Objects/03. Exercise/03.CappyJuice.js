function solve(input) {
    let juices = input.reduce((juiceCollection, juiceArgs) => {

        let [juiceName, juiceQuantity] = juiceArgs.split(' => ');

        if (juiceCollection.currentQuantity[juiceName]) {
            juiceCollection.currentQuantity[juiceName] += +juiceQuantity;
        } else {
            juiceCollection.currentQuantity[juiceName] = +juiceQuantity;
        }

        let bottleQ = Math.floor(juiceCollection.currentQuantity[juiceName] / 1000);

        if (bottleQ > 0) {
            juiceCollection.bottledJuice[juiceName] = bottleQ;
        }

        return juiceCollection;

    }, {
        bottledJuice: {},
        currentQuantity: {}
    }).bottledJuice;

    return console.log(juices);
}

solve(
    [
        'Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ]
);

// function produceBottles(input) {
//     const juices = {};
//     const producedBottles = {};

//     for (let i = 0; i < input.length; i++) {
//         const juiceArgs = input[i].split(' => ');
//         let juiceName = juiceArgs[0];
//         let juiceQuantity = +juiceArgs[1];

//         if (juices[juiceName]) {
//             juices[juiceName] += juiceQuantity;
//         } else{
//             juices[juiceName] = juiceQuantity;
//         }

//         let bottles = Math.floor(juices[juiceName] / 1000);

//         if (bottles > 0) {
//             producedBottles[juiceName] = bottles;
//         }
//     }

//     const sortJuices = Object.entries(producedBottles);

//     for (const juice of sortJuices) {
//         console.log(juice.join(' => '));
//     }
// }

// produceBottles(
//     [
//         'Orange => 2000',
//         'Peach => 1432',
//         'Banana => 450',
//         'Peach => 600',
//         'Strawberry => 549'
//     ]
// );

// produceBottles(
//     [
//         'Kiwi => 234',
//         'Pear => 2345',
//         'Watermelon => 3456',
//         'Kiwi => 4567',
//         'Pear => 5678',
//         'Watermelon => 6789'
//     ]
// );