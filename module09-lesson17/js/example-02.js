const button = document.querySelector("button");

//setTimeout(callback,delay)

const onClick = () => {
	const timerID = setTimeout(() => console.log("I love Async JS"), 2000);

	console.log(timerID);

	//cancels the timeout
	// clearTimeout(timerID);
};

button.addEventListener("click", onClick);
