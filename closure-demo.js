const newClue = (name) => {
    const length = name.length;

    return(weapon) => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    };

};

const suspectGreen = newClue('green');

console.log(suspectGreen);

// retains access to length
console.log(suspectGreen('lead pipe'));

function countClues() {
    var n = 0;
    return {
        count: function() { return ++n; },
        reset: function() { return n = 0; }
    };
};

const counter = countClues();
console.log(counter);
console.log(counter.count());
console.log(counter.reset());


//ES6 equivalent
// const countClues = () => {
//     let n = 0;

//     return {
//         count: () => n++,
//         reset: () => n = 0
//     };
// };