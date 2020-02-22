function getCatalogue(input) {
    let parseData = input.reduce((acc, productLine) => {

        let [name, price] = productLine.split(':').map(x => x.trim());

        let firstLetter = name[0];

        if (acc[firstLetter]) {
            acc[firstLetter] = [...acc[firstLetter], productLine];
        } else {
            acc[firstLetter] = [productLine]; //productline must be splitted
        }

        return acc;
    }, {});

    Object.keys(parseData).sort().map(x => {
        console.log(x);
        parseData[x].sort().map(product => {
            console.log(`  ${product.split(' : ').join(': ')}`);
        });
    });
}

getCatalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);