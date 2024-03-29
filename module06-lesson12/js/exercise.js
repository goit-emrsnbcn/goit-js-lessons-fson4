// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
// let box4 = document.getElementById("box4");

// box1.addEventListener("click", function () {
// 	let color = prompt("Type a color");
// 	box1.style.backgroundColor = color;
// });

// box2.addEventListener("click", function () {
// 	let color = prompt("Type a color");
// 	box2.style.backgroundColor = color;
// });

// box3.addEventListener("click", function () {
// 	let color = prompt("Type a color");
// 	box3.style.backgroundColor = color;
// });

let boxes = document.getElementsByTagName("td");
for (let box of boxes) {
	box.addEventListener("click", function () {
		let color = prompt("Type a color");
		box.style.backgroundColor = color;
	});
}
