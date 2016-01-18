/* Symbols are a new primitive type useful for:
 *	1. Unique Property Keys
 *  2. Constants that represent a concept
*/

// Symbols used as Property Keys
const key = Symbol();
const keyTwo = Symbol();
const object = {};

object.key = 'Such magic.';
object.keyTwo = 'Much Uniqueness'
console.log(object.key);
console.log(object.keyTwo);

// Symbols are always Unique
console.log(key === keyTwo);

// Symbols are good for representing concepts
const anakin = 'jedi';
const yoda   = 'jedi master';
const luke   = 'jedi';

// Now the value of 'jedi' is not Unique. Fix this with Symbols
const anakin = Symbol();
const yoda   = Symbol();
const luke   = Symbol();

// Now values cannot be confused
// Symbols are similar to strings, as they can represent
// concepts and properties. On the other hand, they also
// exhibit functionality of an object, as each symbol has
// its own identity.