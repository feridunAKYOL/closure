# event-loop 

## /2-basic-closure

> pass: 2020-4-13 23:13:03 

[../REVIEW.md](../REVIEW.md)

* [/example-parent-and-own-values.js](#example-parent-and-own-valuesjs) - example - no status
* [/exercise-1.js](#exercise-1js) - pass
* [/exercise-2.js](#exercise-2js) - pass
* [/exercise-3.js](#exercise-3js) - pass
* [/exercise-4.js](#exercise-4js) - pass

---

## /example-parent-and-own-values.js

* example - no status
* [review source](./example-parent-and-own-values.js)

```js
const closeIt = (parentParam) => {
  const parentLocal = "parent frame : " + parentParam;
  return function (ownParam) {
    const ownLocal = "own frame : " + ownParam;
    return { parentParam, parentLocal, ownParam, ownLocal };
  }
}
const closure1 = closeIt("a");
const result1 = closure1("b");

const closure2 = closeIt("c");
const result2 = closure2("d");

```

[TOP](#event-loop)

---

## /exercise-1.js

* pass
* [review source](./exercise-1.js)

```txt
+ PASS : asserting one's return value
+ PASS : asserting two's return value
+ PASS : asserting three's return value
+ PASS : summing closed values
+ PASS : create the value 16 using your closed functions
```

```js
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

```

[TOP](#event-loop)

---

## /exercise-2.js

* pass
* [review source](./exercise-2.js)

```txt
+ PASS : result 1
+ PASS : result 2
+ PASS : result 3
+ PASS : result 4
+ PASS : results 5 & 6
```

```js
const closeIt = (parentParam) => {
	return function(ownParam) {
		return ownParam + parentParam;
	};
};

const closure1 = closeIt(3);
const closure2 = closeIt('3');

const result1 = closure1(8);
const result2 = closure2(8);
console.assert(result1 === 11, 'result 1');
console.assert(result2 === '83', 'result 2');

const result3 = closure1(true);
const result4 = closure2(true);
console.assert(result3 === 4, 'result 3');
console.assert(result4 === 'true3', 'result 4');

const result5 = closure1('2');
const result6 = closure2(2);
console.assert(result5 === result6, 'results 5 & 6');

```

[TOP](#event-loop)

---

## /exercise-3.js

* pass
* [review source](./exercise-3.js)

```txt
+ PASS : result 1
+ PASS : result 2
+ PASS : result 3
+ PASS : result 4
+ PASS : result 5
+ PASS : result 6
```

```js
const closeIt = (paramParent) => {
	const localParent = 'b';
	return function(paramOwn) {
		const localOwn = 'd';
		return paramParent + localParent + paramOwn + localOwn;
	};
};

const closure1 = closeIt('a');

const result1 = closure1('c');
console.assert(result1 === 'abcd', 'result 1');

const result2 = closure1('x');
console.assert(result2 === 'abxd', 'result 2');

const closure2 = closeIt('iii');

const result3 = closure2('2');
console.assert(result3 === 'iiib2d', 'result 3');

const result4 = closure2('--');
console.assert(result4 === 'iiib--d', 'result 4');

const result5 = closure1(8);
console.assert(result5 === 'ab8d', 'result 5');

const result6 = closure2(' ');
console.assert(result6 === 'iiib d', 'result 6');

```

[TOP](#event-loop)

---

## /exercise-4.js

* pass
* [review source](./exercise-4.js)

```txt
+ PASS : result 1
+ PASS : result 2
+ PASS : result 3
+ PASS : result 4
+ PASS : result 5
+ PASS : result 6
```

```js
const closeIt = (x, y) => {
	return function(x) {
		return x + y;
	};
};

const closure_4_5 = closeIt(4, 5);

const result1 = closure_4_5(200);
console.assert(result1 === 205, 'result 1');

const result2 = closure_4_5(-3);
console.assert(result2 === 2, 'result 2');

const closure_false_true = closeIt(false, true);

const result3 = closure_false_true(200);
console.assert(result3 === 201, 'result 3');

const result4 = closure_false_true(-3);
console.assert(result4 === -2, 'result 4');

const result5 = closure_4_5(1);
console.assert(result5 === 6, 'result 5');

const result6 = closure_4_5(1) + closure_false_true(-1);
console.assert(result6 === 6, 'result 6');

```

[TOP](#event-loop)

