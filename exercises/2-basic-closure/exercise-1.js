const closeAValue = (val) => {
	return function() {
		return val;
	};
};

const one = closeAValue(1);
const oneReturns = one();
console.assert(oneReturns === 1, "asserting one's return value");

const two = closeAValue(2);
const twoReturns = two();
console.assert(twoReturns === 2, "asserting two's return value");

const three = closeAValue(4);
const threeReturns = three();
console.assert(threeReturns === 4, "asserting three's return value");

const sum = one() + two() + three(); // fix this line to pass the assert
console.assert(sum === 7, 'summing closed values');

const product = 2 * sum + two(); // fix this line to pass the assert
console.assert(product === 16, 'create the value 16 using your closed functions');
