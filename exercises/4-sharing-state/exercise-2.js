const closeIt = (str) => {
	return [
		function() {
			return str + ' pigs';
		},
		function(param) {
			return str + param;
		}
	];
};

let closedFunctions = closeIt('-');
const concatPigs = closedFunctions[0],
	concatParam = closedFunctions[1]; // ['- pigs'] ,
// closedFunctions = [ closeIt(), closeIt(param) ];

const str1 = concatPigs(); // ['- pigs']

const str2 = concatParam(' rock!'); // ['- rock!']

const str3 = concatPigs(); // ['- pigs']

const str4 = concatParam(str3);

console.assert(str4 === '-- pigs', 'assert str4');
