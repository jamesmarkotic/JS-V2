const reduce = function (list, cb, initial) {
    let memo = initial;
    // loop through list
    for (let i = 0; i < list.length; i++) {
        if (i === 0 && memo === undefined) {
            memo = list[0];
        }
        else {
            memo = cb(list[i], memo)
        }
    }

    // save the return value
    return memo;
}

reduce([1, 2, 3], (val, sum) => { val + sum });