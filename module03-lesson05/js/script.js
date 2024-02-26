//OBJECT CREATION
let person = {
	//property / key: value
	fullname: "John Doe",
	age: 35,
	address: "Manila City",
	"x50-2yb": "Hello World",
	1: "Hello Again",
};

//ACCESSING AN OBJECT
console.log(person.fullname); //dot notation
console.log(person["age"]); //square notation
console.log(person["x50-2yb"]); //Hello World
console.log(person[1]);

//ACCESSING A NESTED OBJECT
const user = {
	name: "Jacques Gluke",
	tag: "jgluke",
	location: {
		country: "Jamaica",
		city: "Ocho Rios",
	},
	stats: {
		followers: 5603,
		views: 4827,
		likes: 1308,
	},
	sayHello: function () {
		console.log("Hello from the user");
	},
};

console.log(user.location.city);
console.log(user.stats.followers); //5603

//ADDING / UPDATING PROPERTY
console.log(user);
user.age = 35; //adding an age property
console.log(user);
user.age = 54;
console.log(user);
user["height"] = 175;
console.log(user);
user["height"] = 180;
console.log(user);

user.stats.name = "Stat Name";
console.log(user);

//OBJECT METHODS
//method is a function inside an object.
user.sayHello();

//this keyword

let car = {
	color: "blue",
	brand: "BMW",
	type: "automatic",
	showDetails: function () {
		console.log(this.color, this.brand, this.type);
	},
	move: function () {
		console.log("Car is moving");
	},
};
//the this keyword points you to the object itself.
car.showDetails();
console.log(this);

const userTwo = {
	name: "Jacques Gluke",
	tag: "jgluke",
	location: {
		country: "Jamaica",
		city: "Ocho Rios",
		test: function (value) {
			console.log(this, value);
		},
	},
	stats: {
		followers: 5603,
		views: 4827,
		likes: 1308,
	},
};

userTwo.location.test("hello from test");

const name = "Henry Cibola";
const age = 25;

const userThree = {
	name, //name: name
	age, //age: age
};

console.log(userThree);

const goods = {
	apples: 6,
	grapes: 3,
	bread: 4,
	cheese: 7,
};

let total = 0;

let goodies = Object.values(goods); //[6, 3, 4, 7]

// for (let goodie of goodies) {
// 	total += goodie;
// }

for (let goodie in goodies) {
	total += goodies[goodie];
}

console.log(total); //20

// const book = {
// 	title: "The Last Kingdom",
// 	author: "Bernard Cornwell",
// 	rating: 8.38,
// };

// const bookEntries = Object.entries(book);
// console.log(bookEntries);
//[['title', 'The Last Kingdom'], ['author', 'Bernard'], ['rating', 8.38]]

const books = [
	//array of objects
	{
		title: "The Last Kingdom",
		author: "Bernard Cornwell",
		rating: 8.38,
	},
	{
		title: "Beside Still Waters",
		author: "Robert Sheckley",
		rating: 8.51,
	},
	{
		title: "The Dream of a Ridiculous Man",
		author: "Fyodor Dostoevsky",
		rating: 7.75,
	},
];

//get all the titles
let titles = [];
for (let book of books) {
	titles.push(book.title);
}
console.log(titles);

//get all the authors
let authors = [];
for (let book of books) {
	authors.push(book.author);
}
console.log(authors);
//get all the ratings

let totalRating = 0;

for (let book of books) {
	totalRating += book.rating;
}

console.log(totalRating);

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating);

const book = {
	title: "The Last Kingdom",
	author: "Bernard Cornwell",
	rating: 8.38,
};

//creating an object

//object literal
let userTen = {
	fullname: "Jane Doe",
	age: 25,
};

//using the new Object
let userEleven = new Object();
console.log(userEleven); //{}
userEleven.fullname = "Jake Doe";
userEleven.age = 35;
console.log(userEleven);
