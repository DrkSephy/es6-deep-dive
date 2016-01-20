/*
 * Maps are a new Data Structure in JavaScript.
 * They allow us to use arbitrary values as keys.
 * Not just strings, as we used hash maps for.
*/

// Hash maps in ES5
var map = new Object();
map[key1] = 'value1';
map[key2] = 'value2';

// Problem 1
// How do we get our own properties of an object?
function getOwnProperty(object, propertyKey) {
	return (object.hasOwnProperty(propertyKey) ? object[propertyKey]: undefined);
}

// However...what if we overwrite the property hasOwnProperty?
> getOwnProperty({ hasOwnProperty: 'Hah, overwritten'}, 'Pwned');
> TypeError: Propery 'hasOwnProperty' is not a function

// How to fix?
function getOwnProperty(object, propertyKey) {
	return (Object.prototype.hasOwnProperty(object, propertyKey) ? object[propertyKey]: undefined);
}

// ^ Abuse of an object to create a hash map

// Actual Maps in ES6
let map = new Map();
> map.set('name', 'david');
> map.get('name'); // david
> map.has('name'); // true

// Keys in Maps can be more than a string
let map = new Map();

const KEY = {}; // We can use objects!
> map.set(KEY, 'ES6 for the win');
> map.get((KEY)); // 'ES6 for the win'

// Iterating over a Map
let map = new Map([
	['name', 'david'],
	[true, 'false'],
	[1, 'one'],
	[{}, 'object'],
	[function () {}, 'function']
]);

for (let key of map.keys()) {
	console.log(typeof key);
	// > string, boolean, number, object, function
};

// .entries()
for (let entry of map.entries()) {
	console.log(entry[0], entry[1]);
}

// More convenient syntax using destructuring:
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
