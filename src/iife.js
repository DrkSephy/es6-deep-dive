(function () {
	var temp = 10;
}());

console.log(temp); // Error, temp is not defined

// Instead of using IIFE inside of ES5, 
// Simply use blocks in ES6
{  // open block
    let temp = 10;
}  // close block

console.log(temp); // ReferenceError