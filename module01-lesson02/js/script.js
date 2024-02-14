//Syntax of if-else statement

/*
    if(condition) {
        //it would execute this code-block
    } else {
        //this would execute if the condition is false
    }
*/

// function sayHello() {
// 	console.log("Hello From Function");
// }
// sayHello();

// console.log("Hello World");

//GLOBAL SCOPE
let x = 5;
if (true) {
	//LOCAL SCOPE or BLOCK SCOPE
	console.log("This is the block scope ", x);
}
console.log("This is the global scope ", x);

// let color = "blue";
// if (color === "green") {
// 	console.log("You may go");
// } else if (color === "yellow") {
// 	console.log("You should slow down");
// } else if (color === "blue") {
// 	console.log("You should jump");
// } else {
// 	console.log("You should stop");
// }

// color === "green" ? console.log("You may go") : color === "yellow" ? console.log("You should slow down") : color === "blue" ? console.log("You should jump") : console.log("You should stop");

if (5 > 2) {
	console.log("say hello");
} else {
	console.log("say hi");
}

// equality operator (==) it only checks if they have the same value
// strict equality operator (===) it checks the value and checks the data type.

// LOGICAL OPERATORS
// && AND - returns true if both operands returns true otherwise false
// || OR - returns true as long as one operand is true. returns false if both operands are false
// ! NOT

// Can you buy me a chocolate ice cream AND a vanilla ice cream.
// Can you buy me a chocolate ice cream OR a vanilla ice cream.

let isLogin = true;
let isCustomer = false;

if (isLogin || isCustomer) {
	console.log("Proceed to checkout");
} else {
	console.log("Cannot proceed to checkout");
}

//TERNARY OPERATOR is a one-liner if else

//Syntax: condition ? "do this if condition is true" : "do this if condition is false"
let age = 25;

if (age > 21) {
	console.log("You may enter");
} else {
	console.log("You shall not pass");
}

age > 21 ? console.log("You may enter") : console.log("You shall not pass");

//SWITCH CASE
/*
switch(value) {
	case value:
		//code block to execute
	case value:
		//code block to execute
	case value:
		//code block to execute
	case value:
		//code block to execute
	default:
		//code to execute if all the case are false.
}
*/
let day = 1;

switch (day) {
	case "1": //day === 1
		console.log("You should wear white");
		break;
	case 2: //day === 2
		console.log("You should wear red");
		break;
	case 3: //day === 3
		console.log("You should wear blue");
		break;
	case 4:
	case 5:
	case 6: //day === 4 || day === 5 || day === 6
		console.log("You should wear green");
		break;
	default: //else
		console.log("You should wear black");
}

let color = "blue";
//switch case is using strict equality
switch (color) {
	case "blue":
		console.log("You should jump");
		break;
	case "green":
		console.log("You should go");
		break;
	case "yellow":
		console.log("You should slow down");
		break;
	default:
		console.log("You should stop");
		break;
}
