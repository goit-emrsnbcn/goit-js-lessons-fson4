// let fruits2 = fruits.map((fruit) => fruit + "🍌");

// console.log(fruits2); //["🍉🍌", "🍎🍌", "🍌🍌"]

// const fruits = ["🍉", "🍎", "🍌"];

// let fruitsFilter = fruits.filter((fruit, idx) => fruit !== "🍌");
// console.log(fruitsFilter);

// let numbers = ["5", "12", "27", "30", "15", "14", "31"];
// let result = numbers.filter((number) => number.includes("1"));
// console.log(result);

const cars = [
	{ make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true },
	{ make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 22455, onSale: true },
	{ make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false },
	{ make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true },
	{ make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false },
	{ make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false },
	{ make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true },
	{ make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true },
	{ make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true },
	{ make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false },
];

//do you want to find the one.
let carModel = cars.filter((car) => car.model === "Fusion" || car.model === "F-150");
console.log(carModel);

// cars.sort((a, b) => a.price - b.price);
// console.log(cars);
// console.log(cars);
// cars.forEach((car) => {
// 	let { make, model } = car;
// 	console.log(make, model);
// });

// let result = cars.filter((car) => car.make === "Toyota");
// console.log(result);

// const fruits = ["🍉", "🍎", "🍌"];
// let fruitFound = fruits.find((fruit) => fruit === "🍌");
// console.log(fruitFound);

// const fruits = ["apple", "mango", "banana", "grapes", "mango"];
// const fruitFound = fruits.find((fruit) => fruit === "mango");
// console.log(fruitFound);

// const fruits = ["🍉", "🍎", "🍌", "🍊", "🍌"];
// // let idx = fruits.findIndex((fruit) => fruit === "🍌");
// let idx = fruits.lastIndexOf("🍌");
// console.log(idx); //4

// const numbers = [-10, -35, -42, 88, -5, -76];
// const result = numbers.every((number) => number > 0);
// const result = numbers.some((number) => number > 0);
// console.log(result);

// const numbers = [61, 19, 74, 35, 92, 56];

// const numbers = [27, 2, 41, 4, 7, 3, 75];
//ascending order  a - b
//descending order b - a
// numbers.sort((a, b) => console.log(a, b));
// console.log(numbers);

// const skills = ["html", "css", "python", "php", "javascript"];
// skills.sort();
// console.log(skills);

const students = [
	{ name: "Mango", courses: ["mathematics", "physics"] },
	{ name: "Poly", courses: ["informatics", "mathematics"] },
	{ name: "Kiwi", courses: ["physics", "biology"] },
];

let courses = students.map((student) => student.courses);
// console.log(courses);

//chaining method
let courses2 = students
	.flatMap((student) => student.courses)
	.sort()
	.reverse()
	.join(" ")
	.split(" ");
console.log(courses2);

const scores = [2, 7, 3, 14, 6];
let output = scores.reduce((acc, score) => acc + score, 0);
// acc = 0 + 2
// acc = 2 + 7
// acc = 9 + 3
// acc = 12 + 14
// acc = 26 + 6 = 32
console.log(output);

//PURE FUNCTIONS WE DONT UPDATE THE ORIGINAL INPUT
function double(array) {
	let doubles = []; //[2, 4, 6, 8]

	for (let i = 0; i < array.length; i++) {
		doubles.push(array[i] * 2);
	}

	return doubles;
}

// let output2 = double(nums);
// console.log(nums);
// console.log(output2);

let nums = [1, 2, 3, 4];
console.log(nums);

const dirtyMultiply = (array, value) => {
	for (let i = 0; i < array.length; i += 1) {
		array[i] = array[i] * value;
	}
};

dirtyMultiply(nums, 2);
console.log(nums);
