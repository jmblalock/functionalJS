const game = {
  "suspects": [
    {
        name: "Colonel Mustard",
        color: "Yellow"
    }, {
        name: "Miss Scarlet",
        color: "Red"
    }
  ]
};

// Exercise I

// for (let i = 0; i < game.suspects.length; i++) {
//   console.log(game.suspects[i]);
// }

// for (let key in game) {
//   console.log(game[key]);
// }

// Exercise II

// for (let i = 0; i < game.suspects.length; i++) {
//   // console.log([i]);
//   for (key in game.suspects[i]) {
//     // console.log(key);
//     // console.log(game.suspects[i]);
//     console.log(game.suspects[i][key]);
//   }
// }

// Exercise III

var [ color1, color2 ] = [ game.suspects[0].color, game.suspects[1].color ];

console.log(color1, color2);

// var [ firstColor, secondColor ] = game.suspects;
var [{ color: firstColor}, { color: secondColor}] = game.suspects; // more specific into the nested object

console.log(firstColor, secondColor);
