// Destructuring allows us to bind properties to as many variables 
// as we need. 

// Example for Objects
var luke = { occupation: 'jedi', father: 'anakin' }
var {occupation, father} = luke;
console.log(occupation); // 'jedi'
console.log(father); // 'anakin'

// Example for Arrays
var [a] = [10]
console.log(a); // 10

// Using Destructuring to interact with objects easier
function getCoords () {
  return {
    x: 10,
    y: 22
  }
}

var {x, y} = getCoords()
console.log(x); // 10
// <- 10
console.log(y); // 22
