/* 
Example 1 - Destructuring
Rewrite the function so that it takes one object of the parameter instead of a set of independent arguments.

*/

function calcBMI(details) {
	//object destructuring
	const { weight, height } = details;
	return (weight / height ** 2).toFixed(2);
}

console.log(calcBMI({ weight: 88.3, height: 1.75 }));
console.log(calcBMI({ weight: 68.3, height: 1.65 }));
console.log(calcBMI({ weight: 118.3, height: 1.95 }));
