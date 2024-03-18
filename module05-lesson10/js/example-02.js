/* 
Example 2 - Storagе

Write a Storage class that creates objects for managing a warehouse of goods. When called, it will receive one argument - the initial array of goods, and write it to the items property.

Add class methods:

getItems() - returns an array of products.
addItem(item) - receives a new product and adds it to the end of the current ones.
removeItem(item) - receives the product and, if it exists, removes it from the current.

*/

class Storage {
	constructor(array) {
		this.items = array;
	}

	getItems() {
		return this.items;
	}

	addItem(item) {
		this.items.push(item);
	}

	removeItem(item) {
		let idx = this.items.indexOf(item);
		if (idx < 0) {
			return console.log("Item doesn't exist");
		}
		this.items.splice(idx, 1);
	}
}

const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);
console.log(storage.getItems()); //["🍎", "🍋", "🍇", "🍑"]
storage.addItem("🍌");
console.log(storage.getItems()); //["🍎", "🍋", "🍇", "🍑", "🍌"]
storage.removeItem("🍋");
console.log(storage.getItems()); ////["🍎",  "🍇", "🍑", "🍌"]
