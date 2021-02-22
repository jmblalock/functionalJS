const myAlert = () => {
    const x = "Help! I think I found a clue!";
    let count = 0;
    const alerter = () => {
        console.log(`${x} ${++count}`);
    };

    // setTimeout(alerter, 1000)
    // console.log('what happens first? this log or the alert?');
    return alerter;
};

const funcAlert = myAlert();
const funcAlert2 = myAlert();
funcAlert();
funcAlert();
funcAlert();
funcAlert2();

// this is the core of how everything fits together in JS