/*
-The firstname input box should not be empty
-The lastname input box should not be empty
-The username should be atleast 8 characters
-The password and confirm password should be atleast 8 characters and it should match

If everything satisfies the condition. Inside the h2 display 'Successfully Registered'

// optional
If you have successfully registered and the gender chosen is male. Inside the h2 display the text. 'Mr. Firstname Lastname you have Successfully Registered'

Else 'Ms. Firstname Lastname you have Successfully Registered'
*/

let regForm = document.getElementById("regForm");

regForm.addEventListener("submit", function (e) {
	e.preventDefault();

	let firstname;
	let lastname;
	let username;
	let password;
	let password2;
	let gender = document.getElementById("gender").value;
	console.log(gender);
});
