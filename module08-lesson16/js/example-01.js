//JS OBJECT
let person = {
	name: "John Doe",
	age: 42,
	sayHello: () => console.log("hello world"),
};

// JSON.stringify() -> converts JavaScript Object to JSON
// JSON.parse() -> converts JSON to a JavaScript object
// Functions are not supported in JSON format.
let result = JSON.stringify(person);
console.log(result);
console.log(typeof result);

//convert this back to normal javascript object
// let result2 = JSON.parse(result);
// console.log(result2.name);

//try - catch

// try {
// 	//it would try all the lines of code until it fails and then it goes to the catch block
// 	console.log(1);
// 	console.log(2);
// 	console.log(x);
// } catch (e) {
// 	//e -> error
// 	console.error(e.message);
// }

try {
	const data = JSON.parse('{"message": "Well, this is awkward"}');
	console.log(data);
} catch (error) {
	console.log(error.name); // "SyntaxError"
	console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parse error in try...catch");
