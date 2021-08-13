// import functions and grab DOM elements
import { add, subtract, multiply } from './utils.js';

const addEl1 = document.getElementById('addValue1');
const addEl2 = document.getElementById('addValue2');
const addButton = document.getElementById('addButton');
const resultEl1 = document.getElementById('totalAdd');

//console.log(addEl1, addEl2, addButton, resultEl);
addButton.addEventListener('click', () => {
	const addFirstVal = addEl1.value;
	const addSecondVal = addEl2.value;

	const sum = add(addFirstVal, addSecondVal);

	resultEl1.textContent = sum;
});
//////////////////
const subtractEl1 = document.getElementById('subtractValue1');
const subtractEl2 = document.getElementById('subtractValue2');
const subtractButton = document.getElementById('subtractButton');
const resultEl2 = document.getElementById('totalSubtract');

//console.log(subtractEl1, subtractEl2, subtractButton, resultEl2);
subtractButton.addEventListener('click', () => {
	const subtractFirstVal = subtractEl1.value;
	const subtractSecondVal = subtractEl2.value;

	const sum = subtract(subtractFirstVal, subtractSecondVal);

	resultEl2.textContent = sum;
});

//////////////////
const multiplyEl1 = document.getElementById('timesValue1');
const multiplyEl2 = document.getElementById('timesValue2');
const multiplyButton = document.getElementById('timesButton');
const resultEl3 = document.getElementById('totalTimes');

//console.log(subtractEl1, subtractEl2, subtractButton, resultEl2);
multiplyButton.addEventListener('click', () => {
	const multiplyFirstVal = multiplyEl1.value;
	const multiplySecondVal = multiplyEl2.value;

	const sum = multiply(multiplyFirstVal, multiplySecondVal);

	resultEl3.textContent = sum;
});
