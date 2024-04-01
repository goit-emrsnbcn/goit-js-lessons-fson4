//EVENT PROPAGATION

//3 STAGES = capturing > target > bubbling

let inner = document.getElementById("inner");
let outer = document.getElementById("outer");

outer.addEventListener("click", (e) => {
	console.log(e.target); //is the actual element that you clicked \ inner div
	console.log(e.currentTarget); //outer div
});

// inner.addEventListener("click", (e) => {
// 	console.log(e.target);
// 	console.log(e.currentTarget);
// });

// window.addEventListener("click", (e) => {
// 	console.log("window");
// });
