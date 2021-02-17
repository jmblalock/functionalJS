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

// for (let i = 0; i < game.suspects.length; i++) {
//   console.log(game.suspects[i]);
// }

// for (let key in game) {
//   console.log(game[key]);
// }

for (let i = 0; i < game.suspects.length; i++) {
  // console.log([i]);
  for (key in game.suspects[i]) {
    // console.log(key);
    console.log(game.suspects[i]);
    // console.log(game.suspects[i][key]);
  }
}
