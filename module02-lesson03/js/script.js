//HOW TO CREATE AN ARRAY
let fruits = ["apple", "mango", "banana"];
//              0         1         2

//HOW TO ACCESS AN ARRAY
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//HOW MANY ITEMS ARE INSIDE THE LIST/ARRAY
console.log(fruits.length); //3

//HOW TO ALWAYS GET THE LAST INDEX NUMBER/POSITION
console.log(fruits[fruits.length - 1]);

//2D ARRAY
let heroes = [
	//      0               1                   2
	["Superman", "Batman", "Cat Girl"], //0
	["Hulk", "Thor", "Ironman"], //1
	["Robert Cop", "Captain Barbell", "Kamen Rider"], //2
];

console.log(heroes[1][2]);

//LOOP ITERATION
const clients = ["Mango", "Poly", "Ajax"];

//USING FOR LOOP
// for (let i = 0; i < clients.length; i++) {

// 	console.log(clients[i]);
// }
//USING FOR OF LOOP
//for(let singular of plural)
for (let client of clients) {
	console.log(client);
}

console.log("=========== ARRAY METHODS ==============");

//push - ADD AN ITEM AT THE END OF THE LIST
//pop - remove an item at the end of the list
let cars = ["honda", "toyota", "bmw", "tesla", "suzuki"];
cars.push("Geely");
console.log(cars);
cars.pop();
console.log(cars);

//unshift - add an item in front of the list
//shift - remove an item in front of the list
cars.unshift("Proton");
console.log(cars);
cars.shift();
console.log(cars);

//indexOf - returns the index position if the item exist otherwise returns -1
console.log(cars.indexOf("Honda"));

//includes - returns true if item exists otherwise returns false
console.log(cars.indexOf("honda"));

console.log(cars);
//["honda", "toyota", "bmw", "tesla", "suzuki"];
//slice(start, finish) but not including last item
//slice(start, howmany)
cars = cars.slice(0, 3);

console.log(cars); //["honda", "toyota", "bmw"]

//splice(index, howMany) - 2 items means you want to delete
//splice(index, howMany, item1, item2, ...) - 3 or more items means you want to delete and add OR you just want to add item.

//using splice to delete an item
cars.splice(0, 1);
console.log(cars); //['toyota', 'bmw'];

//using splice just by adding
cars.splice(1, 0, "tesla", "geely");
console.log(cars);

// ['toyota', 'tesla', 'geely', 'bmw']

//using splice by deleting and adding item
cars.splice(2, 2, "proton", "byd");

console.log(cars); //['toyota', 'tesla', 'proton', 'byd']

//split() - its a string method to convert a string into an array
//join() - is used to convert an array to a string
//reverse() - is used to reverse the items inside the array
let words = ["I", "love", "javascript"];
// words = words.join(" ");
console.log(words.reverse());
