// const createTuple = (a, b, c, d) => {
//     return [[a, c],[b, d]];
// }

// const result = createTuple('it', 'be', 'could', 'anyone', 'no one');

// console.log(result);

const createTuple = (a, b, c, ...d) => {
    return [[a, c],[b, d]];
}

const result = createTuple('it', 'be', 'could', 'anyone', 'no one');

console.log(result);
