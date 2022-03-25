function addFunc(arg1, arg2) {
    return arg1 + arg2;
}

function subFunc(arg1, arg2) {
    return arg1 - arg2;
}

function mulFunc(arg1, arg2) {
    return arg1 * arg2;
}

function divFunc(arg1, arg2) {
    return Math.round(arg1 / arg2);
}

function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args2.concat(args));
            }
        }
    };

}

function pipe(...arguments) {
    let arrFunc = arguments;
    return function (number) {
        for (let i = 0; i < arrFunc.length; i++) {
            number = arrFunc[i](number);
        }
        return number;
    }
}

let add = curry(addFunc);
let sub = curry(subFunc);
let mul = curry(mulFunc);
let div = curry(divFunc);