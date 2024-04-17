/*
Example 2 - Event in Loop Practice
*/

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("C"), 1);
// });

// console.log("A");

// setTimeout(() => console.log("B"), 1);

// //consuming the promise
// promise.then((value) => console.log(value));

// console.log("D");

//1 - ABCD
//2 - ADBC
//3 - ACBD
//4 - ADCB

console.log("A");

Promise.resolve("B")
	.then((value) => console.log(value))
	.catch(() => console.log("C"))
	.finally(() => console.log("D"));

console.log("E");

//AEBD

let promise2 = new Promise((resolve, reject) => {
	reject("Ooops");
});

promise2.then((value) => console.log(value));

//will throw an error because we did not handle or catch the rejected promise
