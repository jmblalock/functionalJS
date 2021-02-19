const _ = {};

_.reduce = function(list, cb, initial) {
    let memo = initial;

    for (let i = 0; i < list.length; i++) {
        if (i === 0 && memo === undefined) {
            memo = list[0];
            i++;
        } else {
            memo = cb(list[i], memo);
        }
    }
    return memo;
};

const x = _.reduce([1, 2, 3], (v, sum) => v + sum, 0);
const y = _.reduce([2, 3, 5], (v, sum) => v + sum, 0);

console.log(x);
console.log(y);
