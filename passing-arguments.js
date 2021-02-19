const increment = function(n) { return n + 1; };

const square = function(n) {return n * n; };

const doMath = function(n, func) { return func(n); };

console.log(doMath(5, increment));
console.log(doMath(5, square));

// ES6 :
const incrementEs6 = n => {  return n + 1; };
const squareEs6 = n => {  return n * n; };
const doMathEs6 = (n, fn) => {  return fn(n); };

console.log(doMathEs6(6, incrementEs6));
console.log(doMathEs6(6, squareEs6));

// How do we pass arguments?
// const ifElse = (condition, isTrue, isFalse, p) => {
//     return condition ? isTrue(p) : isFalse(p);
// };

// ES6
const ifElse = (condition, isTrue, isFalse, ...args) => {
    console.log(args);
    return condition ? isTrue(...args) : isFalse(...args);
};

const fn1 = () => { console.log('GUILTY!!'); };
const fn2 = () => { console.log('NOT GUILTY'); };

console.log(ifElse(true, fn1, fn2, 'Hi', 'Bye', 'Aloha'));
