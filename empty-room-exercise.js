const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];
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

_.map = function(list, cb) {
    const storage = [];
    _.each(list, function(v, i, list) {
        storage.push(cb(v, i, list));
    })
    return storage;
}

_.reduce = function(list, cb, initial) {
    let memo = initial;

    for (let i = 0; i < list.length; i++) {
        if (i === 0 && memo === undefined) {
            memo = list[0];
            i++;
        } else {
            memo = cb(list[i], memo);
        }
    }
    return memo;
};

const notInRoom = (suspect, memo) => {
    const emptyRooms = _.reduce(suspect.rooms, (room, memo, []) => {
        if (room == false) memo.push(room)
            return memo;
    }, []);

    return emptyRooms;
};

const notInRooms = _.map(newDevelopment, notInRoom);

console.log(_.difference(...notInRooms));

console.log(notInRooms);
