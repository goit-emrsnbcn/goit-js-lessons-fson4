//normal function
function greet(name) {
	console.log(`Welcome ${name}`);
}

//callback function
function registerGuest(name, callback) {
	console.log(`Registering guest ${name}`);
	callback(name);
}

registerGuest("Mango", greet);

//inline callback
let btn = document.getElementById("btn");
btn.addEventListener("click", sayHello);

function sayHello() {
	alert("Hello World");
}

//several callbacks
function processCall(recipient, onAvailable, onNotAvailable) {
	//Math.random() would generate a random number from 0.1 - 0.99
	const isRecipientAvailable = Math.random() > 0.5;

	if (!isRecipientAvailable) {
		onNotAvailable(recipient);
		return;
	} else {
		onAvailable(recipient);
	}
}

function takeCall(name) {
	console.log(`Connecting you to ${name}, please wait...`);
}

function activateAnsweringMachine(name) {
	console.log(`The subscriber ${name} is not available`);
}

function leaveMessage(name) {
	console.log(`The subscriber ${name} is not available, recording a hologram`);
}
// processCall("Poly", takeCall, activateAnsweringMachine);
processCall("John", takeCall, leaveMessage);

//repetition abstraction
// for (let i = 0; i < 5; i++) {
// 	console.log(i);
// }

function repeatLog(n) {
	if (n <= 0) return console.log("You should supply value atleast 1");
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}
repeatLog(5);
repeatLog(2);
repeatLog(0);

//foreach method
const letters = ["a", "b", "c", "d"];
// console.log(letters[0]);

// const letters2 = letters.split("");
// console.log(letters2);

letters.forEach((letter, i) => {
	console.log(letter, i);
});

//arrow functions
// function sayHi() {
// 	console.log("Hi");
// }

// let sayHi = function () {
// 	return console.log("Hi");
// };

let sayHi = () => console.log("Hi");

sayHi();

//code types
