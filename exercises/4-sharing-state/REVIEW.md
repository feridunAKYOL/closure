# event-loop 

## /4-sharing-state

> uncaught error: 2020-4-13 23:13:03 

[../REVIEW.md](../REVIEW.md)

* [/example-1-pure-functions.js](#example-1-pure-functionsjs) - example - uncaught error
* [/example-2-pure-closures.js](#example-2-pure-closuresjs) - example - uncaught error
* [/example-3-mutating-closures.js](#example-3-mutating-closuresjs) - example - uncaught error
* [/exercise-1.js](#exercise-1js) - pass
* [/exercise-2.js](#exercise-2js) - pass
* [/exercise-3.js](#exercise-3js) - pass

---

## /example-1-pure-functions.js

* example - uncaught error
* [review source](./example-1-pure-functions.js)

```txt
AssertionError [ERR_ASSERTION]: assert 1
    at Console.assert (console.js:194:23)
    at Console.console.assert ( [ ... ] /review.js:127:3)
    at Object.<anonymous> ( [ ... ] /exercises/4-sharing-state/example-1-pure-functions.js:15:9)
    at Module._compile (module.js:653:30)
    at Object.Module._extensions..js (module.js:664:10)
    at Module.load (module.js:566:32)
    at tryModuleLoad (module.js:506:12)
    at Function.Module._load (module.js:498:3)
    at Module.require (module.js:597:17)
    at require (internal/module.js:11:18)
```

```js
// closeIt creates pure closures
// because the returned functions never modify the closed variable
// calling the closed functions with the same args always returns the same result


const concatPigs = (str) => {
  return str + " pigs";
}
const concatParam = (str, param) => {
  return str + param;
}

const str1 = '-';

console.assert(concatPigs(str1) === null, 'assert 1');
console.assert(concatPigs(str1) === null, 'assert 2');
console.assert(concatParam(str1, " rock!") === null, 'assert 3');
console.assert(concatParam(str1, " rock!") === null, 'assert 4');


const str2 = "hoy";

console.assert(concatPigs(str2) === null, 'assert 5');
console.assert(concatPigs(str2) === null, 'assert 6');
console.assert(concatParam(str2, " cheese!") === null, 'assert 7');
console.assert(concatParam(str2, " cheese!") === null, 'assert 8');

```

[TOP](#event-loop)

---

## /example-2-pure-closures.js

* example - uncaught error
* [review source](./example-2-pure-closures.js)

```txt
AssertionError [ERR_ASSERTION]: assert 1
    at Console.assert (console.js:194:23)
    at Console.console.assert ( [ ... ] /review.js:127:3)
    at Object.<anonymous> ( [ ... ] /exercises/4-sharing-state/example-2-pure-closures.js:20:9)
    at Module._compile (module.js:653:30)
    at Object.Module._extensions..js (module.js:664:10)
    at Module.load (module.js:566:32)
    at tryModuleLoad (module.js:506:12)
    at Function.Module._load (module.js:498:3)
    at Module.require (module.js:597:17)
    at require (internal/module.js:11:18)
```

```js
// closeIt creates pure closures
// because the returned functions never modify the closed variable
// calling the closed functions with the same args always returns the same result

const closeNonMutatingFunctions = (str) => {
  return [
    function () {
      return str + " pigs";
    },
    function (param) {
      return str + param;
    }
  ]
}

let closedFunctions1 = closeNonMutatingFunctions("-");
const concatPigs1 = closedFunctions1[0], concatParam1 = closedFunctions1[1];
closedFunctions1 = null;

console.assert(concatPigs1() === null, 'assert 1');
console.assert(concatPigs1() === null, 'assert 2');
console.assert(concatParam1(" rock!") === null, 'assert 3');
console.assert(concatParam1(" rock!") === null, 'assert 4');


let closedFunctions2 = closeNonMutatingFunctions("hoy");
const concatPigs2 = closedFunctions2[0], concatParam2 = closedFunctions2[1];
closedFunctions2 = null;

console.assert(concatPigs2() === null, 'assert 5');
console.assert(concatPigs2() === null, 'assert 6');
console.assert(concatParam2(" cheese!") === null, 'assert 7');
console.assert(concatParam2(" cheese!") === null, 'assert 8');

```

[TOP](#event-loop)

---

## /example-3-mutating-closures.js

* example - uncaught error
* [review source](./example-3-mutating-closures.js)

```txt
AssertionError [ERR_ASSERTION]: assert 1
    at Console.assert (console.js:194:23)
    at Console.console.assert ( [ ... ] /review.js:127:3)
    at Object.<anonymous> ( [ ... ] /exercises/4-sharing-state/example-3-mutating-closures.js:20:9)
    at Module._compile (module.js:653:30)
    at Object.Module._extensions..js (module.js:664:10)
    at Module.load (module.js:566:32)
    at tryModuleLoad (module.js:506:12)
    at Function.Module._load (module.js:498:3)
    at Module.require (module.js:597:17)
    at require (internal/module.js:11:18)
```

```js
// closeIt creates impure closures
// because the returned functions DO modify the closed variable
// calling the closed functions with the same args will not always return the same result

function closeMutatingFunctions(str) {
  return [
    function () {
      return str += " pigs";
    },
    function (param) {
      return str += param;
    }
  ]
}

let closedFunctions1 = closeMutatingFunctions("-");
const concatPigs1 = closedFunctions1[0], concatParam1 = closedFunctions1[1];
closedFunctions1 = null;

console.assert(concatPigs1() === null, 'assert 1');
console.assert(concatPigs1() === null, 'assert 2');
console.assert(concatParam1(" rock!") === null, 'assert 3');
console.assert(concatParam1(" rock!") === null, 'assert 4');


let closedFunctions2 = closeMutatingFunctions("hoy");
const concatPigs2 = closedFunctions2[0], concatParam2 = closedFunctions2[1];
closedFunctions2 = null;

console.assert(concatPigs2() === null, 'assert 5');
console.assert(concatPigs2() === null, 'assert 6');
console.assert(concatParam2(" cheese!") === null, 'assert 7');
console.assert(concatParam2(" cheese!") === null, 'assert 8');

```

[TOP](#event-loop)

---

## /exercise-1.js

* pass
* [review source](./exercise-1.js)

```txt
+ PASS : assert str4
```

```js
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

```

[TOP](#event-loop)

---

## /exercise-2.js

* pass
* [review source](./exercise-2.js)

```txt
+ PASS : assert str4
```

```js
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

```

[TOP](#event-loop)

---

## /exercise-3.js

* pass
* [review source](./exercise-3.js)

```txt
+ PASS : assert str4
```

```js
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

```

[TOP](#event-loop)

