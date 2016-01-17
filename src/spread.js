// Concatenating an array of strings using ES5
function concat () {
  return Array.prototype.slice.call(arguments).join(' ')
}

var result = concat('The', 'cat', 'went', 'meow');
console.log(result); // 'The cat went meow'

// Concatenating an array of strings using ES6
function concat(...params) {
	return params.join(' ');
}

var result = concat('The', 'cat', 'went', 'meow');
console.log(result); // 'The cat went meow';