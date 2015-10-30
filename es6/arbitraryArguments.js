// In ES6, we can use a rest parameter to specify an
// arbitrary amount of arguments
function logAllArguments(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}