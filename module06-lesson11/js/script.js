// let heading = document.getElementById("heading");
// let heading1 = document.getElementById("heading1");
// let heading2 = document.getElementById("heading2");
// console.log(heading);

// heading.style.color = "red";
// heading1.style.color = "red";
// heading2.style.color = "red";

// let heading = document.getElementById("heading");
// console.log(heading);

// let headings = document.getElementsByClassName("heading");
// headings[0].style.color = "red";
// headings[1].style.color = "red";
// headings[2].style.color = "red";

// for (let i = 0; i < headings.length; i++) {
// 	headings[i].style.color = "red";
// }

// for (let heading of headings) {
// 	heading.style.color = "red";
// }

//Query Selector only targets one element
let headingsQ = document.querySelectorAll(".heading");
let headingsC = document.getElementsByClassName("heading");
// console.log(headingsQ);
// console.log(headingsC);

// headingsQ.forEach((heading) => (heading.style.color = "red"));
// headingsC.forEach((heading) => (heading.style.color = "red"));

// html is a live collection
// node list is a static collection
let cars = document.getElementById("cars");
let addCar = document.getElementById("addCar");
// let allCars = document.querySelectorAll(".car");
let allCars = document.getElementsByClassName("car");

addCar.onclick = function () {
	let li = document.createElement("li"); //<li></li>
	li.innerText = "Nissan"; //<li>Nissan</li>
	li.className = "car"; //<li class='car'>Nissan</li>
	cars.appendChild(li);
	console.log(allCars);
};

let headTags = document.querySelectorAll("h2");
console.log(headTags);
