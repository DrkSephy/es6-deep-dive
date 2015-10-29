// Make parameter options optional in ES5
function selectEntries(options) {
    options = options || {}; // optional parameter
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;
}