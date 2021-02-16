// Nesting
// const game = {};

// game['suspects'] = [];

// same thing as =>
const game = {
    'suspects': []
}

// Pushing
game.suspects.push({
    "name": "Colonel Mustard",
    "color": "yellow"
});

// Using brackets
game.suspects[1] = {
    "name": "Miss Scarlet",
    "color": "red"
}

console.log(game["suspects"]);
console.log(game.suspects);
