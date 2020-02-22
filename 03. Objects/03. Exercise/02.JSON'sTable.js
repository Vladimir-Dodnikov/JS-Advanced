
function JSONtableToHTML(input) {

    let dataToObjects = input.map(JSON.parse);

    let createTable = content => `<table>${content}\n</table>`;
    let createTableRow = content => `\n\t<tr>${content}\n\t</tr>`;
    let createTableData = content => `\n\t\t<td>${content}</td>`;

    let tableRowPerPerson = dataToObjects.reduce((accTableRows, row) => {
        
        let tableDataPerPerson = Object.values(row).reduce((accTableRow, tableData)=>{
            return accTableRow + createTableData(tableData);
        }, '');

        return accTableRows + createTableRow(tableDataPerPerson);

    }, '');

    console.log(createTable(tableRowPerPerson));
}

JSONtableToHTML(
    [
        '{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}'
    ]
);