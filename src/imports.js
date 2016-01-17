// main.js
import { sumTwo, sumThree } from 'math/addition';

// Alternate way to import by providing aliases
import { 
	sumTwo as addTwoNumbers,
	sumThree as addThreeNumbers
} from 'math/addition';

import * as addition from 'math/addition';

console.log(sumTwo(2, 3));

// Alternate calls (1)
console.log(addTwoNumbers(2, 3));

// Alternate calls (2)
console.log(addition.sumTwo(2, 3));

///////////////////////////////////////////////////

// math/addition.js
function sumTwo(a, b) {
	return a + b;
}

function sumThree(a, b) {
	return a + b + c;
}

export { sumTwo, sumThree };

// Alternate expoorts

function sumTwo(a, b) {
	return a + b;
}

function sumThree(a, b) {
	return a + b + c;
}

var api = {
	sumTwo  : sumTwo,
	sumThree: sumThree
}

export default api