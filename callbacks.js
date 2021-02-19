const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue() : isFalse();
};

const isGuilty = true;
const logTrue = () => { console.log('GUILTY!!'); };
const logFalse = () => { console.log('NOT GUILTY'); };

ifElse(isGuilty, logTrue, logFalse);

// ifElse(isGuilty,
//     () => { console.log('GUILTY!!');},
//     () => { console.log('NOT GUILTY');}
// );
