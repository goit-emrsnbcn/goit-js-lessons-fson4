document.addEventListener("keyup", function (event) {
	console.log(event);
	console.log(event.type);
	console.log(event.code);
});

let btn = document.querySelector(".js-btn");

btn.addEventListener("click", function (e) {
	window.print();
});
