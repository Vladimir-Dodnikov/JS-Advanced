/*jshint esversion: 6*/

function calorieObject(input) {
    const obj = {};

    for (let i = 0; i < input.length - 1; i++) {

        if (i % 2 == 0) {
            obj[input[i]] = +input[i+1];
        } else if (i % 2 == 1) {
            obj[input[i+1]] = +input[i+2];
        }
    }
    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);