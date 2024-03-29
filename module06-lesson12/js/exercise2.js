let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let result = document.getElementById("result");

let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");

//how would you attach an event listener to the buttons.
add.addEventListener("click", function () {
	let output = parseFloat(num1.value) + parseFloat(num2.value);
	result.innerText = output;
});
