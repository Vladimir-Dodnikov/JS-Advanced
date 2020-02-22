function solve() {
    let optionList = document.querySelectorAll('#selectMenuTo')[0];

    let button = document.querySelector('button');
    //let button = document.querySelector('button');

    let input = document.querySelector('#input');
    let resultElement = document.getElementById('result');
    let newResult;

    optionList.innerHTML = 
    `<option selected value=""></option>
    <option value="binary">Binary</option>
    <option value="hexadecimal">Hexadecimal</option>`;

    button.addEventListener('click', ()=> {

        if (optionList.value === 'binary') {
            newResult = Number(input.value).toString(2);
        } else {
            newResult = Number(input.value).toString(16).toUpperCase(); //Hexadecimal!
        }

        (resultElement.value) = newResult;
    })
}