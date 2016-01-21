// ES6 example of a class

// ES5 Base Class
function Person(name, age, gender) {
    this.name   = name;
    this.age    = age;
    this.gender = gender;
}

Person.prototype.incrementAge = function () {
    return this.age += 1;
};

// Base class
class Person {
	constructor(name, age, gender) {
		this.name   = name;
		this.age    = age;
		this.gender = gender;
	}
	
	incrementAge() {
	  this.age += 1;
	}
}

// Extended Classes in ES5
function Employee(name, title) {
    Person.call(this, name); // super(name)
    this.title = title;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = function () {
    return Person.prototype.describe.call(this) // super.describe()
           + ' (' + this.title + ')';
};

function Personal(name, age, gender, occupation, hobby) {
	Person.call(this, name, age, gender);
	this.occupation = occupation;
	this.hobby = hobby;
}

Personal.prototype = Object.create(Person.prototype);
Personal.prototype.constructor = Personal;
Personal.prototype.incrementAge = function () {
	return Person.prototype.incrementAge.call(this) += 1;
}

// Extended Class
class Personal extends Person {
	constructor(name, age, gender, occupation, hobby) {
	  super(name, age, gender);
		this.occupation = occupation;
		this.hobby = hobby;
	}
	
	incrementAge() {
	  super.incrementAge();
	  this.age += 20;
	  console.log(this.age);
	}
}

const person = new Personal('David', 25, 'male', 'metalhead', 'game development');
person.incrementAge();


 let _counter = new WeakMap();
    let _action = new WeakMap();
    class Countdown {
        constructor(counter, action) {
            _counter.set(this, counter);
            _action.set(this, action);
        }
        dec() {
            let counter = _counter.get(this);
            if (counter < 1) return;
            counter--;
            _counter.set(this, counter);
            if (counter === 0) {
                _action.get(this)();
            }
        }
    }

// Simulating private data using WeakMaps
let _age = new WeakMap();
class Person { 
	constructor(age) {
		_age.set(this, age);
	}

	incrementAge() {
		let age = _age.get(this);
		if(age > 50) {
			console.log('Midlife crisis');
		}
	}
}

> const person = new Person(25);
> person.incrementAge();
> Reflect.ownKeys(person); // []