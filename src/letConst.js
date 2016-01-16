// ES5

var snack = 'Meow Mix';

function getFood(food) {
	if (food) {
		var snack = 'Friskies';
		return snack;
	}
	return snack;
}

getFood(false); // Undefined

// Re-write the above example
var snack = 'Meow Mix';

function getFood(food) {
	
	var snack; // Hoisting
	
	if (food) {
		snack = 'Friskies';
		return snack;
	}

	return snack;
}

getFood(false); // Undefined

// ES6

let snack = 'Meow Mix';

function getFood(food) {
	
	if (food) {
		let snack = 'Friskies';
		return snack;
	}

	return snack;
}

getFood(false);