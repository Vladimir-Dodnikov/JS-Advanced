function createRegister(input) {
    let parseData = input.reduce((acc, carSpecs) => {

        let [carName, carModel, producedCars] = carSpecs.split(' | ').map(x => x.trim());
        
        if (acc[carName]) {
            if (acc[carName[carModel]]) {
                acc[carName[carModel]] += producedCars;
            }
            acc[carName] = {
                model: carModel,
                quantity: producedCars
            };
        } else {
            acc[carName] = {
                model: carModel,
                quantity: producedCars
            };
        }

        return acc;
    }, {});

    Object.keys(parseData).sort().map(brand => {
        console.log(brand);
        parseData[brand].sort().map(car=>{
            console.log(car);
        });
    });
}

createRegister(
    [
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]
);