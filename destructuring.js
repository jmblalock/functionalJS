var obj = {
    first: 'Paulo',
    last: 'Coelho'
}
var first = obj.first;
var last = obj.last;

console.log(first, last);

// destructuring
var [a, b] = [true, false];

console.log(a, b);

let [name1, name2] = ['justin', 'blalock'];

console.log(name1, name2);

// destructuring for objs

const { c, d } = { c: 0 , d: 1 };
console.log(c, d);
console.log( typeof c );