/*
 * Notes on ES6 Generators.
*/

function* sillyGenerator() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
}

var generator = sillyGenerator();
var value = generator.next();
> console.log(value); // { value: 1, done: false }
> console.log(value); // { value: 2, done: false }
> console.log(value); // { value: 3, done: false }
> console.log(value); // { value: 4, done: false }

// Note how the generator is technically not done iterating
// It will return { value: undefined, done: true} on next
// iteration.

// Can we use return? Using for...of
function* sillyGenerator() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	return 5;
}

for(let val of sillyGenerator()) {
	console.log(val); // 1, 2, 3, 4
} 

// We'll never get 5, since we exposed no method to use .next()


// Actual generator example
function* factorial(){
	let [current, total] = [0, 1];

  while (true){
    
    yield total;
    
    current++;
    total = total * current;
  }
}

for (let n of factorial()) {
  console.log(n);
  if(n >= 100000) {
  	break;
  }
}

// Hiding asynchronousity with Generators
function request(url) {
	getJSON(url, function(response) {
		generator.next(response);
	});
}

function* getData() {
	var entry1 = yield request('http://some_api/item1');
	var data1  = JSON.parse(entry1);
	var entry2 = yield request('http://some_api/item2');
	var data2  = JSON.parse(entry2);
}

// Upgrading our generator using promises
function request(url) {
    // Note: returning a promise now!
    return new Promise( function(resolve,reject){
        makeAjaxCall( url, resolve );
    } );
}

// This will yield a promise
function request(url) {
	return new Promise((resolve, reject) => {
		getJSON(url, resolve);
	});
}

// Construct a function to control the generator
function iterateGenerator(gen) {
	var generator = gen();
	var ret;
	(function iterate(val) {
		ret = generator.next();
		if(!ret.done) {
			ret.value.then(iterate);
		} else {
			setTimeout(function() {
				iterate(ret.value);
			});
		}
	})(); 
}

iterateGenerator(function* getData() {
  var entry1 = yield request('http://some_api/item1');
	var data1  = JSON.parse(entry1);
	var entry2 = yield request('http://some_api/item2');
	var data2  = JSON.parse(entry2);
});

