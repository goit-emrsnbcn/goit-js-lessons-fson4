"use strict";

function foo() {
	console.log(this);
}

let obj = {
	logCtx: foo,
};

obj.logCtx();

let person1 = {
	firstName: "John",
	lastName: "Doe",
	getFullName: function () {
		return this.firstName + this.lastName;
	},
};

let person2 = {
	firstName: "Jane",
	lastName: "Doe",
};

let person2GetFullName = person1.getFullName.bind(person2);
// console.log(person2GetFullName());
/////////////
/////////////
/////////////

function greetGuest(...greeting) {
	console.log(...greeting, this.username);
}

const mango = { username: "mango123" };
const poly = { username: "poly456" };
const greetings = ["welcome", "hello", "hi"];
//APPLY
// greetGuest.apply(poly, ["welcome", "hello", "hi"]);

//CALL
// greetGuest.call(mango, greetings); //Welcome, hi, hello mango123

function sayHi() {
	console.log("Hi");
}

function mainFunction(callback) {
	callback();
}

mainFunction(sayHi);

const customer = {
	firstName: "Jacob",
	lastName: "Mercer",
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};

function makeMessage(callback) {
	// callback() is a call of the getFullName method without an object
	console.log(`Processing request from ${callback()}.`);
}

// makeMessage(customer.getFullName); // this will result to an error
makeMessage(customer.getFullName.bind(customer));

//Processing request from Jacob Mercer
