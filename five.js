const _ = {};

// .each definition
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

// .map definition
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

const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function (item) {
    return `broken ${item}`;
};

// Solution
_.map(weapons, makeBroken);

// Second Part
// function CreateSuspectObjects(name) {
//     return {
//         name: name,
//         color: name.split(' ')[1],
//         speak() { log(`my name is ${name}`); }
//     };
// };

// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

// var suspectObjectList = _.map(suspects, function (suspect) {
//     CreateSuspectObjects(suspect)
// });