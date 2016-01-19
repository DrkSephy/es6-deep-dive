/* What are promises?
 * 
 * Promises are basically placeholders for values that will eventually exist.
 * They make it easier to reason about code, and are a nice substitute for callbacks. 
*/


var data = requests.get('http://swapi.co/api/people/1'); // .get returns a brand new data promises
var response = data.then(res => res.body); // data.then returns another new promise
var save = response.catch(err => console.error(err)); // response.catch returns another new promise

// requests.get returns a brand new data promise
// data.then returns another new promise
// response.catch returns another new promise
// When data is (fufilled), data.then reaction is executed
// response is then settled who was waiting for data.then to settled
// response was rejected, so we run a .catch instead of .then branch
// save is fufilled and logs the error

// In ES6, we no longer need libraries to create Promises. We can create them
// from scratch. 

// new Promise(resolve => resolve()) // promise was fufilled
// new Promise((resolve, reject) => reject()) // promise was rejected

new Promise(resolve => resolve(data))
	.then(result => console.log(data));


new Promise((resolve, reject) => 
	reject(new Error('Failed to fufill Promise')))
	.catch(reason => console.log(reason));


// Example of a promise
var promise = new Promise(function(resolve, reject) {  
   if (/* condition */) {
      resolve(/* value */);  // fulfilled successfully
   }
   else {
      reject(/* reason */);  // error, rejected
   }
});

// The first handler (resolve) is called when the Promise has been fufilled,
// and the value has been passed to the handler.

// The second handler (reject) is called when the Promise has been rejected 
// with the value being passed to that handler. 

// A Promise can only be settled (fufilled/rejected) once, and this value is immutable.

// Talk about concurrent promises using Promises.all