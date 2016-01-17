// ES5
// Trying to prefix this.name from Person won't work due to the scoping
// and the value of this being changed 

function Person(name) {
	this.name = name;
}

Person.prototype.prefixName = function (arr) {
	return arr.map(function (character) {
		return this.name + character;
	});
};

// ES5 Solution 1: Store the this pointer

function Person(name) {
	this.name = name;
}

Person.prototype.prefixName = function (arr) {
	var that = this;
	return arr.map(function (character) {
		return that.name + character;
	});
};

// ES5 Solution 2: Pass the value that this should be
// when the callback is invoked

function Person(name) {
	this.name = name;
}

Person.prototype.prefixName = function (arr) {
	return arr.map(function (character) {
		return this.name + character;
	}, this);
}

// ES5 Solution 3: Bind the correct value of this
function Person(name) {
	this.name = name;
}

Person.prototype.prefixName = function (arr) {
	return arr.map(function (character) {
		return this.name + character;
	}.bind(this));
}

// ES6 Solution: Use the Arrow function!
function Person(name) {
	this.name = name;
}

Person.prototype.prefixName = function(arr) {
	return arr.map((character) => {
		return this.name + character;
	});
};