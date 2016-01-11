// Return sum of squares of arr
var arr = [1, 2, 3];
var squares = arr.map(function (x) { 
  return x * x 
});

// Using the arrow function, we have a more concise solution. 
// Arrow functions are extremely useful to replace callbacks
// which simply return the result of an expression.
let arr = [1, 2, 3];
let squares = arr.map(x => x * x);