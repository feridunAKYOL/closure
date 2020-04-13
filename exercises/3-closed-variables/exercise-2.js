const closesParentParamter = (parentParam) => {
	// write me!
	return function(str) {
		return str.split('').join(parentParam);
	};
};

const closure1 = closesParentParamter('|');
const closure2 = closesParentParamter('~');

const result1 = closure1('+(=)+');
console.assert(result1 === '+|(|=|)|+', 'assert 1');

const result2 = closure2('+(=)+');
console.assert(result2 === '+~(~=~)~+', 'assert 2');

const result3 = closure1('abc');
console.assert(result3 === 'a|b|c', 'assert 3');

const result4 = closure2('xyz');
console.assert(result4 === 'x~y~z', 'assert 4');

const closure3 = closesParentParamter('');
const result5 = closure3('--0--1--');
console.assert(result5 === '--0--1--', 'assert 5');

const closure4 = closesParentParamter('');
const result6 = closure4('--1--0--');
console.assert(result6 === '--1--0--', 'assert 6');
