let btn = document.getElementById("showCT");

function clickBtn(event) {
	console.log(event); //details of the event
	console.log(event.target); //the actual element <button id="showCT">Click me</button>
	console.log(event.target.innerText); //Click me
	console.log(event.target.getAttribute("id")); //showCT
	console.log(event.type); //click
}

btn.addEventListener("click", clickBtn);
