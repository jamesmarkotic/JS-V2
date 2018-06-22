const add = function (a, b = 2) {
    console.log(arguments); //logs [3]
    return a + b;
};
add(3); //5??

//  Rewrite

const add = (a, b) => {
    b = b || 2;
    console.log(a, b);
    return a + b;
}

add(3);