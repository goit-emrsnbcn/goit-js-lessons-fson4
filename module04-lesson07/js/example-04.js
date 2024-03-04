/* 
Example 4 - Arrow functions
Make the code refactoring using arrow functions.
*/

//change this into arrow function
// function createProduct(partialProduct, callback) {
// 	const product = { id: Date.now(), ...partialProduct };
// 	callback(product);
// }

let createProduct = () => {
	const product = { id: Date.now(), ...partialProduct };
	callback(product);
};

//change this into arrow function
// function logProduct(product) {
// 	console.log(product);
// }

let logProduct = (product) => console.log(product);

//change this into arrow function
// function logTotalPrice(product) {
// 	console.log(product.price * product.quantity);
// }
let logTotalPrice = (product) => console.log(product.price * product.quantity);

createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);
