function solve() {
    const input = document.getElementById('string');
    const resultElement = document.getElementById('result');

    const validName = /( ([A-Z]{1}[A-Za-z]*)-([A-Z]{1}[A-Za-z]*).-([A-Z]{1}[A-Za-z]*) )|( ([A-Z]{1}[A-Za-z]*)-([A-Z]{1}[A-Za-z]*) )/g;
    
    const validAirport = / [A-Z]{3}\/[A-Z]{3} /g;
    
    const validFly = / [A-Z]{1,3}[\d]{1,5} /g;
    
    const validCompany = /\- [A-Z]{1}[a-z]*[*]{1}[A-Z]{1}[a-z]* /g;
   
    let [firstPart, secondPart] = input.value.split(',');
    secondPart = secondPart.trim()
    
    let name = '';
    let airport = '';
    let fly = '';
    let company = '';

    if (firstPart.match(validName)) {
        name = firstPart.match(validName)[0];

        while (name.includes('-')) {
            name = name.replace('-', ' ');
        }
        name = name.trim();
    }

    if (firstPart.match(validAirport)) {
        airport = firstPart.match(validAirport)[0].trim();
    }

    if (firstPart.match(validFly)) {
        fly = firstPart.match(validFly)[0].trim();
    }

    if (firstPart.match(validCompany)) {
        company = firstPart.match(validCompany)[0].trim();
        while (company.includes('- ')) {
            company = company.replace('- ', '');
        }
        while (company.includes('*')) {
            company = company.replace('*', ' ');
        }
        company = company.trim()
    }

    let output = ''
    if (secondPart === 'name') {
        output = `Mr/Ms, ${name}, have a nice flight!`
    } else if (secondPart === 'flight') {
        output = `Your flight number ${fly} is from ${airport.split('/')[0]} to ${airport.split('/')[1]}.`
    } else if (secondPart === 'company') {
        output = `Have a nice flight with ${company}.`
    } else if (secondPart === 'all') {
        output = `Mr/Ms, ${name}, your flight number ${fly} is from ${airport.split('/')[0]} to ${airport.split('/')[1]}. Have a nice flight with ${company}.`
    }

    let spanElement = document.createElement('span');
    spanElement.textContent = output;

    resultElement.appendChild(spanElement);
}