// Using ES6, we can return multiple values without using intermediate variables
// through the use of destructuring
let obj = { bar: '123' };

let {writable, configurable} =
    Object.getOwnPropertyDescriptor(obj, 'bar');

console.log(writable, configurable); // true true

// {writeable, configurable} is equivalent to {writable: writable, configurable: configurable}
