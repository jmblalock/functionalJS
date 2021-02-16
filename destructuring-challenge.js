let obj = {
    "name": "Rusty",
    "room": "Kitchen",
    "weapon": "Candlestick"
};

console.log(obj);

let [ n, r ] = [ obj.name, obj.room ];
console.log(n);
console.log(r);

let { name, weapon, room } = {
    "name": "Rusty",
    "room": "Kitchen",
    "weapon": "Candlestick"
};

console.log( name, weapon, room );