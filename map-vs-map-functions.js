const _ = {};

// const weapons = ['candlestick', 'lead pipe', 'revolver']
// const brokenWeapons = [];

// const makeBroken = function(item) {
//     return `broken ${item}`;
// }

// for (let i = 0; i < weapons.length; i++){
//     brokenWeapons.push(makeBroken(weapons[i]));
// }

// console.log(brokenWeapons);

_.each = function(list, callback) {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            // call the callback with a list item
            callback(list[i], i, list);
        }
    } else {
        // loop through object
        for (let key in list) {
            callback(list[key], key, list);
        }
    }
}

_.map = function(list, callback) {
    const storage = [];

    // for (let i = 0; i < list.length; i++) {
    //     storage.push(callback(list[i], i, list));
    // }

    // using each instead of the for loop above
    _.each(list, function(v, i, list) {
        storage.push(callback(v, i, list));
    })
        
    return storage;
}

_.map([1, 2, 3], function(v, i, arr) {console.log(v + 1)});
