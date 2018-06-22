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