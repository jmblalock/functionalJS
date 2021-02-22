const makeTimer = () => {
    console.log('initialized');
    let elapsed = 0;
    console.log(elapsed);

    const stopwatch = () => {
        console.log('stopwatch');
        return elapsed;
    };

    const increase = () => elapsed++;

    setInterval(increase, 1000);

    return stopwatch;
};

const timer = makeTimer();
