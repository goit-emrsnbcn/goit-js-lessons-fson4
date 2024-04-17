console.log(1);
console.log(2);
console.log(3);

// const message = "Hello World";
// console.log(message);

//Example 1 - Creating and Consuming a Promise
//Promise -> is a special object in JavaScript it represents a current state of an asynchronous operation
//Promise has three states
// 1. Pending
// 2. Fulfilled
// 3. Rejected
let promise = new Promise((resolve, reject) => {
	let value = 2; //7
	setTimeout(() => {
		value = value + 5;

		if (value === 7) {
			resolve("Success! I added 5 to the current value");
		} else {
			reject("Error! This is too hard");
		}
	}, 1000);
});

//Consuming a promise (.then, .catch, .finally)
promise
	.then((value) => console.log(value))
	.catch((error) => console.log(error))
	.finally(() => console.log("We are still friends"));

//fetching real data from an online-resource
// let users = [
// 	{ id: 1, name: "John Doe" },
// 	{ id: 2, name: "Jane Doe" },
// ];

// console.log(users);

//res.json() -> JSON.parse()

// console.log(fetch("https://jsonplaceholder.typicode.com/users"));

fetch("https://jsonplaceholder.typicode.com/users") //fetch
	.then((res) => {
		console.log(res);
		return res.json();
	}) //decode
	.then((data) => console.log(data))
	.catch((error) => console.log(error))
	.finally(() => console.log("RUN ADS"));
