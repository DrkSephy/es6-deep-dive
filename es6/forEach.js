// Iterate over an array using ES6
let arr = ['a', 'b', 'c'];
for (let item of arr) {
    console.log(item);
}

// Get both index and value using .entries and destructuring
for (let [index, item] of arr.entries()) {
    console.log(index+'. '+item);
}