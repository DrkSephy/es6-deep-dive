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