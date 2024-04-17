//setItem('key',  value) -> save an item inside the localStorage
localStorage.setItem("color", "blue");

//getItem('key')
console.log(localStorage.getItem("color")); //blue

let person = { fullname: "john doe", age: 42 };
let keys = Object.keys(person); //["fullname", "age"]

for (let key of keys) {
	localStorage.setItem(key, person[key]);
}

// for (let key in person) {
// 	localStorage.setItem(key, person[key]);
// }

//when storing an object make sure to stringify the object first.
// localStorage.setItem("person", JSON.stringify(person));

// let person2 = JSON.parse(localStorage.getItem("person"));
// console.log(person2.age);

// localStorage.removeItem("color");

//clear - delete everything
// localStorage.clear();

//length - how many items are inside the localStorage
// console.log(localStorage.length);

// let fruits = ["apple", "mango", "banana"];
// localStorage.setItem("fruits", JSON.stringify(fruits));

// let fruits2 = JSON.parse(localStorage.getItem("fruits"));
// console.log(fruits2);
