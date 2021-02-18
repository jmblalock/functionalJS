const _ = {};

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

_.filter = function(arr, cb) {
    const storage = [];
    _.each(arr, function(item, i, list) {
        if (cb(item, i, list)) storage.push(item);
    });
    return storage;
}

_.map = function(list, cb) {
    const storage = [];
    _.each(list, function(v, i, list) {
        storage.push(cb(v, i, list));
    })
    return storage;
}

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

// Filter
const myResult1 = videoData.filter(suspect => suspect.present);

const suspects = _.filter(videoData, function (suspectObj) {
    return suspectObj.present;
});

// console.log(myResult1);
console.log(suspects);

// Map
const myResult2 = myResult1.map(suspects => suspects.name);

// console.log(myResult2);

const suspectsNames = _.map(suspects, suspect => {
    return suspect.name;
});

console.log(suspectsNames);
