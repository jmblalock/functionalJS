const createTuple = (a, b, c, ...d) => {
    console.log(arguments);
    return [[a, c],[b, d]];
}

const result = createTuple('it', 'be', 'could', 'anyone', 'no one');

// console.log(arguments);
console.log(result);