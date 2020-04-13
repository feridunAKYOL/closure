const closeIt = (str) => {
	return [
		function() {
			return (str += ' pigs');
		},
		function(param) {
			return (str += param);
		}
	];
};

let closedFunctions = closeIt('-');
const concatPigs = closedFunctions[0],
	concatParam = closedFunctions[1];
// closedFunctions = _;

const str1 = concatPigs(); // '- pigs'

const str2 = concatParam(' rock!'); // "- pigs rock!"

const str3 = concatPigs(); // "- pigs rock! pigs"

const str4 = concatParam(str3); // "- pigs rock! pigs - pigs rock! pigs"

console.assert(str4 === '- pigs rock! pigs- pigs rock! pigs', 'assert str4');
