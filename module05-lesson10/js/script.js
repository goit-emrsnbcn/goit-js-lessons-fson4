// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const baseSalary2 = 50000;
// const overtime2 = 50;
// const rate2 = 40;

// const getWage = (baseSalary, overtime, rate) => {
// 	return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

// const employeeOne = {
// 	baseSalary: 30000,
// 	overtime: 10,
// 	rate: 20,
// };

// const employeeTwo = {
// 	baseSalary: 30000,
// 	overtime: 30,
// 	rate: 10,
// };

// let person = {}
// let person = new Object() // {}

class Employee {
	constructor(a, b, c, currency) {
		this.baseSalary = a;
		this.overtime = b;
		this.rate = c;
		this.currency = currency;
	}

	getWage() {
		return this.baseSalary + this.overtime * this.rate;
	}
}

let employeeOne = new Employee(30000, 10, 20, "php");
// console.log(employeeOne.getWage());

// let employeeTwo = new Employee(25000, 50, 30);
// console.log(employeeTwo.getWage());

// class Product {
// 	constructor(name, price, description) {
// 		this.name = name;
// 		this.price = price;
// 		this.description = description;
// 	}
// }

// let productOne = new Product("Table", 20, "Sturdy");
// let productThree = new Product("Ladder", 50, "Metal");

// let productTwo = {
// 	name: "Chair",
// 	price: 50,
// 	description: "Plastic",
// };

//ENCAPSULATION - where all the properties and methods related to that object are grouped together.
class User {
	constructor(fullname, age, address) {
		if (fullname === "") return alert("fullname cannot be empty");
		if (age === "") return alert("age cannot be empty");
		if (address === "") return alert("address cannot be empty");

		this.fullname = fullname;
		this.age = age;
		this.address = address;
	}

	login() {
		console.log("You are logged in");
	}

	logout() {
		console.log("You are logged out");
	}
}
const userOne = new User("John Doe", 43, "Manila");

//DRY - do not repeat yourself
//Inheritance
class Admin extends User {
	addProduct() {
		console.log("Add product");
	}
	deleteProduct() {
		console.log("Delete product");
	}
}

const adminOne = new Admin("Jane Doe", 36, "Qc");

console.log(userOne);
console.log(adminOne);
adminOne.login();

let fInput = document.getElementById("fInput"); //<input type="text" id="finput" />
let lInput = document.getElementById("lInput");
let mInput = document.getElementById("mInput");
let regForm = document.getElementById("regForm");

regForm.onsubmit = function (e) {
	e.preventDefault(); //prevents the page to reload after submitting the form

	if (fInput.value.length < 6) {
		alert("firstname must be atleast 5 characters");
	}

	if (lInput.value.length < 6) {
		alert("firstname must be atleast 5 characters");
	}

	if (mInput.value.length < 1) {
		alert("firstname must be atleast 5 characters");
	}

	new User(fInput.value, lInput.value, mInput.value);
};

//OBJECT LITERAL
const animal = {
	legs: 4,
	walk() {
		console.log("walking");
	},
};

const dog = Object.create(animal);
dog.name = "Brownie";
dog.walk();
console.log(dog);

console.log(animal.isPrototypeOf(dog));

console.log(dog.hasOwnProperty("name")); //true or false?
console.log(dog.hasOwnProperty("walk"));
