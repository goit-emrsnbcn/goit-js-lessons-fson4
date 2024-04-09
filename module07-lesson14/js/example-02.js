let outputResizeDefault = document.getElementById("outputResizeDefault");
let outputResizeThrottling = document.getElementById("outputResizeThrottling");

let eventResizeCounter = {
	default: 0,
	throttling: 0,
};

//default resizing
document.addEventListener("resize", () => {
	alert("hello");
	// eventResizeCounter.default += 1;
	// outputResizeDefault.innerText = eventResizeCounter.default;
});

//throttling resizing
// document.addEventListener(
// 	"resize",
// 	_.throttle(() => {
// 		eventResizeCounter.throttling += 1;
// 		outputResizeThrottling.innerText = eventResizeCounter.throttling;
// 	}, 1500)
// );
