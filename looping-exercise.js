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

// console.log(game);

for (let i = 0; i < game.suspects.length; i++) {
  console.log(game.suspects[i]);
}

for (let key in game) {
  console.log(game[key]);
}
