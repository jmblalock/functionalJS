const _ = {};
_.curry(func, [arity=func.length]);

var abc = function(a, b, c) {
    return [a, b, c];
}

var curried = _.curry(abc);

console.log(curried(1)(2)(3));
