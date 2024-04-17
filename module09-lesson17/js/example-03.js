const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");

let timerId = null;
startBtn.addEventListener("click", () => {
	timerId = setInterval(() => console.log("I love Async JS"), 1000);
});

stopBtn.addEventListener("click", () => {
	clearInterval(timerId);
	console.log(`Interval with id ${timerId}`);
});
