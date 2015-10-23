// Object.getOwnPropertyDescriptor returns property descriptors,
// which is an object that holds multiple values in it's properties.

// When using ES5, note that we still need an intermediate variable
// In this case, it's propDesc
var obj = { bar: '123' };

var propDesc = Object.getOwnPropertyDescriptor(obj, 'bar');
var writable = propDesc.writable;
var configurable = propDesc.configurable;

console.log(writable, configurable); // true true