/* 
Example 3 -Calculator

Create a calculator object with five methods:

read(a, b)- takes two values and stores them as object properties.
add() - returns the sum of the stored values.
mult() - multiplies the stored values and returns the result.
divide() - divide the two stored values and returns the result
subtract() - subtract the two stored values and returns the result.
*/

//solving the problem programatically
const calculator = {
	a: 0,
	b: 0,
	// read: function() {

	// }
	read(a, b) {
		this.a = a;
		this.b = b;
	},

	add() {
		return this.a + this.b;
	},
};

calculator.read(3, 5);
console.log(calculator.add()); //8

calculator.read(5, 5);
console.log(calculator.add());

calculator.read(10, 2);
console.log(calculator.add());

console.log(calculator);
// console.log(calculator.mult()); // 15
// console.log(calculator.divide()); //0.6
// console.log(calculator.subtract()); //-2
