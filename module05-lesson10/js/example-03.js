/* 
Example 3 - User

Write a class User which creates an object with properties username and email. 

Declare private properties #login and #email, which can be accessed via getter and setter of login and email.
*/

class User {
	#username;
	#email;
	#tax = 20;
	constructor(username, email) {
		this.#username = username;
		this.#email = email;
	}

	//to access something private you must set a public method
	set setEmail(email) {
		this.#email = email;
	}

	get getEmail() {
		console.log(this.#email);
	}

	//static method can be accessed without creating an object
	static helloworld() {
		console.log("hello world");
	}
}

let userOne = new User("johndoe", "johndoe@gmail.com");
// userOne.setEmail("janedoe@gmail.com");
userOne.setEmail = "janedoe@gmail.com";
userOne.getEmail;

// console.log(userOne);

// console.log(userOne.getEmail);
// console.log(userOne.getEmail);
// userOne.helloWorld();
// User.helloWorld();
