const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const _ = {};

// _.filter = function(arr, cb) {
//     // create a new array
//     const storage = [];
//     // loop through array
//     for (let i = 0; i < arr.length; i++) {
//         // check if cb returns true
//         if (cb(arr[i], i, arr) === true) {
//             // if it returns true, push into array
//             storage.push(arr[i]);
//         }
//     }
//     //return array
//     return storage;
// }

_.filter = function(arr, cb) {
    const storage = [];
    _.each(arr, function(item, i, list) {
        if (cb(item, i, list)) storage.push(item);
    });
    return storage;
}

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

const x = _.filter(videoData, function(suspectObject) {
    return suspectObject.present;
});

console.log(x);