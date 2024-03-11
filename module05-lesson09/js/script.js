"use strict";
//run your js file on strict mode
tax = 15;

let printBtn = document.getElementById("printBtn");
printBtn.onclick = function () {
	window.close();
};

let person = {
	firstName: "John",
	lastName: "Doe",
	details: {
		address: "Manila",
		zipCode: "1500",
		getDetails: function () {
			return this;
		},
	},
	getFullName: function () {
		const foo = () => {
			console.log("inside foo", this);
		};
		foo();
		console.log("outside foo", this);
	},
};

person.getFullName();
//using the 'this' keyword inside an arrow function it will return the window.object
//METHOD IS A FUNCTION INSIDE AN OBJECT

// console.log(person.getFullName());

// console.log(person.details.getDetails());
//person2.firstName

// let person2 = {
// 	firstName: "Jane",
// 	lastName: "Villanueva",
// 	sayHello: function (firstName) {
// 		return "Hello " + firstName;
// 	},
// };
// person2.getFullName = person.getFullName;

// console.log(person2.getFullName());
// console.log(person2.sayHello("Kevin"));

let nav = document.getElementById("nav");

window.onscroll = function () {
	if (window.scrollY >= 100) {
		nav.style.backgroundColor = "blue";
	} else {
		nav.style.backgroundColor = "red";
	}
};

function test() {
	console.log(this);
}

test(); //function? window?
//using the this keyword inside a function would return the window object.

tax = 2;
