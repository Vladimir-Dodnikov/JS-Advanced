let a = 5;
let b = 'pesho';
a.localeCompare(b);

function parseData(input) {
    let parseData = input.reduce((acc, system) => {
        let [systemName, componentName, subComponentName] = system.split('|').map(x => x.trim());

        if (!acc[systemName]) {
            acc[systemName] = {
                [componentName]: [subComponentName]
            };
            return acc;
        }

        if (!acc[systemName][componentName]) {
            acc[systemName][componentName] = [subComponentName];
            return acc;
        }

        acc[systemName][componentName] = [...acc[systemName][componentName], subComponentName];
        return acc;
    }, {});
    
    let sortedData = Object.entries(parseData)
        .sort(function(a,b) {return parseData[b] - parseData[a]})
        .reduce((obj, [key, value]) => ({
            ...obj,
            [key]: value
        }), {});
    console.log(sortedData);
    // for (const system in parseData) {
    //     console.log(system);

    //     for (const component in parseData[system]) {
    //         console.log(`|||${component}`);
    //         for (const subComponent of parseData[system][component]) {
    //             console.log(`||||||${subComponent}`);
    //         }
    //     }
    // }
}

parseData(
    [
        'SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security'
    ]
);