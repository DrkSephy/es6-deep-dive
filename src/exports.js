// CommonJS exports in ES5
module.exports = 1
module.exports = { foo: 'bar' }
module.exports = ['foo', 'bar']
module.exports = function bar () {}

// Exports in ES6
export default 1
export default { foo: 'bar' }
export default ['foo', 'bar']
export default function bar () {}

// Named Exports in CommonJS
module.exports.name = 'David';
module.exports.age = 25;

// Named Exports in ES6
// NOTE: Exports are binding, changing the variable used when 
// imported would affect the public interface itself
export var name = 'David';
export var age  = 25;


