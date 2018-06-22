const _ = {};
_.each = function (list, callback) {
    // loop through the list
    // call the callback with a list item
    if (Array.isArray(list)) {
        // loop through array
        for (let i = 0; i < list.length; i++) {
            // call the callback with a list item
            callback(list[i], i, list);
        }
    }
    else {
        // loop through object
        for (let key in list) {
            callback(list[key], key, list);
        }
    }
}

_.map = function (list, callback) {
    const storage = [];

    // for (let i = 0; i < list.length; i++) {
    //     storage.push(callback(list[i], i, list) {
    //     })
    // }
    _.each(list, function (val, i, list) {
        storage.push(callback(val, i, list));
    });
};

_.filter = function (arr, callback) {
    const storage = [];
    _.each(arr, function (item, i, list) {
        if (callback(item, i, arr) === true) {
            storage.push(arr[i]);
        }
    })
    // for (let i = 0; i < arr.length; i++) {
    //     // if (Array.isArray(arr)) {
    //     // }
    //     // else {
    //     // }
    //     if (callback(arr[i], i, arr) === true) {
    //         storage.push(arr[i]);
    //     }
    // };
    return storage;
};
// Part Two
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': false },
            { library: false }
        ]
    }
];

const suspects = _.filter(videoData, function (suspectObj) {
    return suspectObj.present;
})

const suspectNames = _.map(suspects, suspect => {
    return suspect.name;
})