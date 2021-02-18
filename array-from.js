const constructArr = function() {
    const arr = Array.from(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
};
const x = constructArr('was', 'it', 'in');

console.log(x);
