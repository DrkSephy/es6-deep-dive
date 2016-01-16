// ES5

var snack = 'Meow Mix';

function getFood(food) {
	if (food) {
		var snack = 'Friskies';
		return snack;
	}
	return snack;
}

getFood(false); 

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