// Destructuring === Arrays

let [ a, b ] = [ 1, 2 ];
console.log( a, b );

// Omit certain values
let [ c,  , d ] = [ 1, 2, 3 ];
console.log( c, d );

// Combine with spread/rest operator (accumulates the rest of the values)
let [ e, ...f ] = [ 1, 2, 3 ];
console.log( e, f );

// Swap variables easily without temp
let g = 1, h = 2;
[ h, g ] = [ g, h ];
console.log( g, h );

// Advance deep arrays
var [i, [j, [k, l]]] = [
    1, 
    [2,
    [[[3, 4], 5],
    6
]]];
console.log(`i = ${i}`);
console.log(`j = ${j}`);
console.log(`k = ${k}`);
console.log(`l = ${l}`);

// === Objects
var { user: x } = {user: 5}
console.log(x);
// => 5

// Fail-safe
var { user1: y } = { user2: 5 };
console.log(y);
// => undefined

// More values
var { prop1: x, prop2: y} = { prop1: 5, prop2: 10 };
console.log(x, y);
// => 5 10

// Short-hand syntax
var { prop1, prop2 } = { prop1: 5, prop2: 10 }
console.log(prop1, prop2);
// => 5 10

// Equal to:
var { prop1: prop1, prop2: prop2 } = { prop1: 5, prop2: 10 }
console.log(prop1, prop2);
// => 5 10

// === Potential grammar hiccups

// Oops: This doesn't work:
// var a, b;
// { a, b } = { a: 1, b: 2 };

// But this does work
var m, n;
({ m, n } = { m: 1, n: 2 });
console.log(a, b);
// => 1 2

// This is due to the grammar in JS.
// Starting with { implies a block scope, not an object literal.
// () converts to an expression.

// From Harmony Wiki:
// Note that object literals cannot appear in
// statement position, so a plain object
// destructuring assignment statment
// { x } = y must be parenthesized either
// as ({ x } = y) or ({ x }) = y

// === Combined destructuring of objects and arrays

// Combine objects and arrarys
var { prop1: x, prop2: [ , y] } = { prop1: 5, prop2: [10, 100]};
console.log(x, y);
// => 5 100