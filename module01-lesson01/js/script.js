function sayHello() {
	alert("Hello From External JS");
}

//camelCase when declaring variable names or function names

//Creating variables - there are 3 ways to create variables
//var, let, const

// var x = 5;
// var x = 10;
// let x = 5;
// x = 10;

//you are declaring a variable x;
// let x;

//you are assignin a value to x
// x = 5;

//declaring and assigning = initialization
// let x = 5;
// x = 20; //re-assigning

//constant
// const tax = 12;
// tax = 50;

// const tax = 15;

// console.log(tax);

let a = 5;
let b = 10;
a = b * 2;

console.log(a); //20

//math operators / symbols
// +
// -
// /
// *

let num1 = 5;
let num2 = 8;
let num3 = 6;

//prioritize
console.log(num1 * (num2 - num3));

// let message = "hello world";
// console.log(message.length); //length of characters
// console.log(message.toUpperCase());

let username;
console.log(typeof username); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"

//The 3 pop up messages
//alert() - normal popup message
//confirm() - popup message with a cancel/yes button
//prompt() - popup message wherein you can type a value

//math operators / symbols
// + add
// - sub
// / div
// * mult
// % modulo / remainder

let x1 = 4;
let x2 = 10;
console.log(x2 % x1); //2

//check if the given number is odd or even
let givenNum = 20;
console.log(givenNum % 2); //1

let fullname = "John Doe";
let age = 35;

//string concatenation
console.log("Hi, My name is " + fullname + " and I am " + age + " years old.");
//Hi, My name is John Doe and I am 35 years old.

//TEMPLATE LITERAL - you don't need to escape the quotes.
console.log(`Hi, My name is ${fullname} and I am ${age} years old.`);
