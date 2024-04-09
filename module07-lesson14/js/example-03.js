let outputScrollDefault = document.getElementById("outputScrollDefault");
let outputScrollThrottling = document.getElementById("outputScrollThrottling");
let outputScrollDebounce = document.getElementById("outputScrollDebounce");

let eventScrollCounter = {
	default: 0,
	throttling: 0,
	debounce: 0,
};

//default scrolling
document.addEventListener("scroll", () => {
	eventScrollCounter.default += 1;
	outputScrollDefault.innerText = eventScrollCounter.default;
});

//throttling scrolling
document.addEventListener(
	"scroll",
	_.throttle(() => {
		eventScrollCounter.throttling += 1;
		outputScrollThrottling.innerText = eventScrollCounter.throttling;
	}, 1500)
);

document.addEventListener(
	"scroll",
	_.debounce(() => {
		eventScrollCounter.debounce += 1;
		outputScrollDebounce.innerText = eventScrollCounter.debounce;
	}, 300) //after 0.3s
);
