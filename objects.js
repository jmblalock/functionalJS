// var person = {};

// person.name = "Mrs. White";

// var person = {
//     "name": "Mrs. White"
// };

// console.log(person.name);

// var who = person.name;

// console.log(who);

// person.name = "Mr. White";

// console.log(who);
// console.log(person.name);

// Arrays -------------------------->

// var person = [];

// person.name = "Mrs. White";

// var who = person.name;

// console.log(who);
// console.log(person);

// console.log(typeof person === "object");

// Brackets ------------------------>

// var person = [];
// person.name = "Mrs. White";
// var who = person.name;
// person[0] = "I was not in the Billiards room";

// // console.log(person);

// var plea = "wouldShe"
// person[plea] = "I would never!";

// console.log(person);

// var person = [];
// var plea = "wouldShe";

// person.name = "Mrs. White";

// person[plea] = "I would never!";

// console.log(person);

// var person = [];
// var plea = "wouldShe";

// person.name = "Mrs. White";

// person["plea"] = "I would never!";

// console.log(person.plea);

var box = {};
box['material'] = "cardboard";
box[0] = 'meow';
box['^&*'] = "testing 123";

var test = box['^&*'];

console.log(box);
console.log(test);