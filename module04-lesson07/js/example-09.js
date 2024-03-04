/* 
Example 9 - forEach method
Make the code refactoring using forEach method and arrow functions.

*/

// function calсulateAverage(...args) {
// 	let total = 0;
// 	for (let i = 0; i < args.length; i++) {
// 		total += args[i];
// 	}
// 	return total / args.length;
// }

let calculateAverage = (...args) => {
	//let args = [1,2,3,4]
	let total = 0;
	args.forEach(function (num) {
		total += num;
	});
	return total / args.length;
};

console.log(calculateAverage(1, 2, 3, 4)); // 2.5

/*

function test(a, b, ...c) {
    console.log(a,b,c)
}
test(1,2,3,4,5)

a = 1
b = 2
...c = [3,4,5]
*/
