// function solve(input) {
//     let parseData = input.reduce((acc, heroElements, i, arr) => {

//         let [heroName, level, items] = heroElements.split(' / ');

//         acc.push({
//             name: heroName,
//             level: +level,
//             items: items ? items.split(', ') : []
//         });

//         return acc;

//     }, []);

//     return JSON.stringify(parseData);
// }

function heroesInventory(input) {
    const heroes = [];
    for (const element of input) {

        let heroElements = element.split(' / ');
        let heroName = heroElements[0];
        let heroLevel = +heroElements[1];
        let heroItems = heroElements[2].split(', ');

        const hero = {
            'name': heroName,
            'level': heroLevel,
            'items': heroItems ? heroItems : []
        };

        heroes.push(hero);
    }
    let objToJSON = JSON.stringify(heroes);
    console.log(objToJSON);
}

heroesInventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);

heroesInventory(
    [
        'Jake / 1000 / Gauss, HolidayGrenade'
    ]
);