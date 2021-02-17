// Looping with_.each
function createSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {log(`My name is ${name}...`);}
    };
};

const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

const suspectsList = [];

// suspects.forEach(function(name) {
//     suspectsList.push(CreateSuspectObjects(name));
// });

// console.log(suspectsList);

// Not working
// _.each(suspects, function(name) {
//     let suspectObj = CreateSuspectObjects(name);
//     suspectsList.push(suspectObj);
// });

// _.each(suspects, function(name) {
//     suspectsList.push(CreateSuspectObjects(name));
// });

var rooms = ['observatory', 'ballroom', 'library'];
// var logger = function(val) {
//     console.log(val);
// }

rooms.forEach(room => console.log(room));

const _ = {};

_.each = function(list, callback) {
    //
    if (Array.isArray(list)) {
        // loop through array
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

_.each(['sally', 'sandy', 'lisa'], function(name, i, list) {
    if (list[i + 1]) {
        console.log(name, 'is younger than', list[i + 1] )
    } else {
        console.log(name, 'is the oldest');
    }
});