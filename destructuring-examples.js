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

// Fail-safe
var { user1: y } = { user2: 5 };
console.log(y);

// More values
var { prop1: x, prop2: y} = { prop1: 5, prop2: 10 };
console.log(x, y);
