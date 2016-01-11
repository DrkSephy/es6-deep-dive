// Make parameter options optional in ES5
function selectEntries(options) {
    options = options || {}; // optional parameter
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;
}

// In ES6, we can make the parameter optional by = {}
function selectEntries({ start=0, end=-1, step=1 } = {}) {

}