// Handling default parameters in ES5
function addTwoNumbers(x, y) {
    x = x || 0;
    y = y || 0;
    return x + y;
}

// Handling default parameters in ES6
function addTwoNumbers(x=0, y=0) {
	return x + y;
}

addTwoNumbers(2, 4); // 6
addTwoNumbers(2); // 2
addTwoNumbers(); // 0