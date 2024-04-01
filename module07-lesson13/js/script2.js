// let cars = document.querySelectorAll("li");

//LINEAR TIME
// cars.forEach((car) => {
// 	car.addEventListener("click", (e) => {
// 		alert(e.target.innerText + " is clicked");
// 	});
// });

//CONSTANT TIME
//EVENT DELAGATION
let cars = document.querySelector("#cars");
cars.addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		alert(e.target.innerText);
	}
});

/*
Create a function called runningSum that accepts a single integer and it returns the running sum value.

For ex: 
runningSum(5); //15
runningSum(3); //6
*/

//linear time complexity
function runningSum(num) {
	return (num * (num + 1)) / 2;
}

console.log(runningSum(1000)); //15 = 1 + 2 + 3 + 4 + 5
console.log(runningSum(3)); //6 = 1 + 2 + 3
