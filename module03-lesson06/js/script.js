//SPREAD OPERATOR ...
//mostly used on array and objects
const numbers = [5, 4, 7, 25, 1];
console.log(Math.max(...numbers)); //5, 4, 7, 25, 1

const fruits = ["apple", "mango", "banana"];
const fruitsCopy = [...fruits];

console.log(fruits);
console.log(fruitsCopy);
fruitsCopy[0] = "Melon";
console.log(fruitsCopy);
console.log(fruits);

let person = {
	name: "John Doe",
	age: 52,
};

// person.address = "Manila";
person = { ...person, address: "Manila" };
console.log(person);

//REST OPERATOR (...)
//rest operator should always be at the end of a parameter
function sayHello(name, age, ...details) {
	const [details1, details2, details3, details4] = details;
	console.log(details2);
}

sayHello("John Doe", 52, "Manila", 175, "May 12", "Brown");

//OBJECT DESTRUCTURING
let car = {
	color: "red",
	brand: "BMW",
	type: "hybrid",
	details: {
		year: 2020,
		variant: "suv",
	},
};

// console.log(car.type);
let {
	type,
	color,
	details: { year },
} = car;

console.log(type);
console.log(color);
color = "blue";
console.log(car);
console.log(color);
console.log(year);

//ARRAY DESTRUCTURING
let cars = ["toyota", "honda", "bmw"];
console.log(cars[0]);
//you are renaming each item as a variable;

const [poop, pee, pop] = cars;
console.log(poop);
console.log(pee);
console.log(pop);

// PARAMETER OBJECT PATTERN
function doStuffWithBook({ title, downloads, numberOfPages, rating }) {
	// Doing something with parameters

	console.log(title, downloads, numberOfPages, rating);
	// And so on
}

// ❌ What is 736? What is 10283? What is true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

// ✅ Everything is clear
doStuffWithBook({
	title: "The Last Kingdom",
	numberOfPages: 736,
	downloads: 10283,
	rating: 8.38,
	isPublic: true,
});
