// Currying Exercise
// _.curry(func, [arity=func.length])
// var abc = function(a, b, c) {
//   return [a, b, c];
// };
// var curried = _.curry(abc);
// curried(1)(2)(3);
// => [1, 2, 3]
// curried(1, 2)(3);
// => [1, 2, 3]

const curry = (func) => { //abc
    return (arg) => { // 1
        return (arg2) => { // 2
            return func(arg, arg2)
        }
    }
};

// Composing Exercise

// const consider = (name) => { 
//     return `I think it could be... ${name}`; 
//   };
//   const exclaim  = (statement) => { 
//     return `${statement.toUpperCase()}!`; 
//   };
//   const blame = _.compose(consider, exclaim);
//   blame('you');
//   => 'I think it could be... YOU!'

const compose = (fn, fn2) => {
    return (arg) => {
        const result = fn2(arg);
        return fn(result);
    }
}