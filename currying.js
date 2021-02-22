// const _ = {};
// _.curry(func, [arity=func.length]);

// var abc = function(a, b, c) {
//     return [a, b, c];
// }

// var curried = _.curry(abc);

// console.log(curried(1)(2)(3));

const curry = (fn) => { // abc
    return (arg) => { // 1
        return (arg2) => { // 2
            return fn(arg, arg2)
        }
    }
}

var abc = function(a, b) {
    return [a, b];
}

var curried = curry(abc);

console.log(curried(1)(2));
// => [1, 2]