const str0 = '';

function concatPigs(str) {
	return str + ' pigs';
}
function concatParam(str, param) {
	return str + ' ' + param;
}

const str1 = concatPigs(str0); // ' pigs'

const str2 = concatParam(str1, ' rock!'); // ' pigs  rock!'

const str3 = concatPigs(str2); // ' pigs  rock! pigs'

const str4 = concatParam(str2, str3); // ' pigs  rock!  pigs  rock! pigs'

console.assert(str4 === ' pigs  rock!  pigs  rock! pigs', 'assert str4');
