// #1.  create a parent function
function checkscope() {
    // #2.  define variables in the parent's local scope
    const innerVar = "local scope";
    
    // #3.  define a function inside the parent function. We call this a child.
    function innerFunc() {
        return innerVar;
    };

    // #4.  return that function from inside the parent function
    return innerFunc;
};

// run parent function and save to a variable. This variable will hold
// whatever the function RETURNS.
const test = checkscope();

// optional: check what that variable holds as its value.  (Hint: it should 
// be the inner function)
console.log(test);

// run the inner function.
console.log(test());

// gotcha ??
const findSomeone = () => {

    const speak = () => {
        console.log(who);
    };

    let who = 'Why hello there, Prof Plum!';

    return speak;
};

const someoneSpeak = findSomeone();
console.log(someoneSpeak);

someoneSpeak();

// timer example
const makeTimer = () => {
    let elapsed = 0;

    const stopwatch = () => { return elapsed; };

    const increase = () => elapsed++;

    setInterval(increase, 1000);

    return stopwatch;
};

let timer = makeTimer();
console.log(timer());
timer();