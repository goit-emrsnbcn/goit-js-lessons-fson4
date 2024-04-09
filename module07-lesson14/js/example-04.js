let username = document.getElementById("username");
let msg = document.getElementById("msg");

username.addEventListener(
	"keyup",
	_.debounce((e) => {
		if (e.target.value.length < 8) {
			msg.innerText = "Username must be atleast 8 characters";
			msg.classList.add("red");
			msg.classList.remove("green");
		} else {
			msg.innerText = "Username accepted";
			msg.classList.add("green");
			msg.classList.remove("red");
		}
	}, 0.3) //0.3s
);
