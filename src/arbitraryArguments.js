// Arbitrary amount of arguments using ES5
function logAllArguments() {
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

// In ES6, we can use a rest parameter to specify an
// arbitrary amount of arguments
function logAllArguments(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}