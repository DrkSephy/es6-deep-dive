// ES6 example of a class

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