let halfOutput = document.getElementById("half-output");
let halfInput = document.getElementById("half-input");
let halfBtn = document.getElementById("half-btn");

halfBtn.addEventListener("click", (e) => {
	let num = parseInt(halfInput.value);
	let output = num;

	while (Math.floor(num / 2) >= 1) {
		output += Math.floor(num / 2);
		num /= 2;
	}

	halfOutput.innerText = output;
});
