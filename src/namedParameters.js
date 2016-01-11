// Example of options object pattern in ES5 for 
// handling named parameters
function selectEntries(options) {
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;
}

// Once again, destructuring to the rescue. We can pass in an object
// as a function parameter in ES6 to handle named parameters. 
function selectEntries({ start=0, end=-1, step=1 }) {
	// Code here
}