// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, multiply, divide } from '../utils.js';

const test = QUnit.test;

test('add should take in 5 + -5 and return 0 ', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 0;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = add(5, -5);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('add should take in "5" + -7 and return -2 ', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = -2;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = add('5', -7);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('add should take in 8 + 2 and return 10 ', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 10;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = add(5, 5);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
////
test('subtract should take in 5 - -5 and return 10 ', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 10;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = subtract(5, -5);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('subtract should take in "5" - -7 and return 12 ', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 12;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = subtract('5', -7);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('subtract should take in 8 - 2 and return 6 ', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 6;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = subtract(8, 2);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

////
test('multiply should take in 5 * -5 and return -25 ', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = -25;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = multiply(5, -5);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('multiply should take in "5" * -7 and return -35 ', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = -35;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = multiply('5', -7);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('multiply should take in 8 * 2 and return 16 ', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 16;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = multiply(8, 2);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
////
test('divide should take in 5 / -5 and return -1 ', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = -1;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = divide(5, -5);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('divide should take in "18" / -6 and return -3 ', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = -3;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = divide('18', -6);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('divide should take in 9 / 3 and return 3 ', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 3;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = divide(9, 3);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
