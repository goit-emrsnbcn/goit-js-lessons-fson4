/* 
Example 2 - Object.values() method

We have an object that stores our team salaries. 
Write code for summing all salaries and store the result in the sum variable. 
Should get 390.

*/

const salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

let sum = 0;

//let values =  Object.values(salaries); //[100, 160, 130]

for (let key in salaries) {
	sum += salaries[key];
}

console.log(sum); //390
