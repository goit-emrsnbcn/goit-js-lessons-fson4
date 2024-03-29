let form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
	e.preventDefault(); //it prevents the page to reload when submitting the form

	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	// console.log(username, password);
	let user = {
		username: "johndoe123",
		password: "qweqweqwe",
	};

	if (username === user.username && password === user.password) {
		alert("Login Successfully");
	} else {
		alert("Invalid Credentials");
	}

	form.reset(); //will clear the input boxes inside the form
});
