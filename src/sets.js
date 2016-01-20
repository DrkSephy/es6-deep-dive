/*
 * Sets are a new data structure in ES6.
 * Contains unique elements, is faster and handles NaN
 *    The reason for this is that storing arbitrary 
 *    elements in an array (ES5) means we need to write
 *    filter methods. Also, indexOf cannot handle NaN.
*/

let set = new Set();
> set.add('javascript');
> set.has('javascript'); // true
> set.delete('javascript'); 
> set.has('javascript'); // false

// Mapping a set
let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].map(val => val * 2));
console.log(set); // {2, 4, 6, 8, 10}

// Filtering a set
let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(val => val % 2));
console.log(set); // {2, 4}