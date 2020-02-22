//for console test
//let input = '0100011011010111100100100000011011100110000101101101011001010010000001101001011100110010';

function solve() {
	let input = document.getElementById('input').value;
	let result = document.getElementById('resultOutput');

	let sumOfBinaryInput = input.split('').map(Number).reduce((acc, b) => acc + b, 0);

	while (sumOfBinaryInput > 9) {
		sumOfBinaryInput = sumOfBinaryInput.toString().split('').map(Number).reduce((acc, b) => acc + b, 0);
	}

	let parsedNumber = input.slice(sumOfBinaryInput, input.length - sumOfBinaryInput);

	let groupOfNumbers = [];
	let groupOfChars = [];

	for (let i = 0; i < Math.ceil(parsedNumber.length / 8); i++) {

		let binaryToString = parsedNumber.slice(i * 8, (i + 1) * 8);
		let strToIntNumber = parseInt(binaryToString, 2);

		groupOfNumbers.push(strToIntNumber);

		let numberToChar = String.fromCharCode(strToIntNumber);

		groupOfChars.push(numberToChar);
	}

	let _string = groupOfChars.filter(x => x.match(/[A-za-z ]/));

	result.innerHTML = _string.join('');
}