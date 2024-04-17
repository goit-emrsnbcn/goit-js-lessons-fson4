//Abstraction - hiding the complexity and only exposing what is necessary

//save the data to the localStorage
export const save = (key, value) => {
	try {
		const serializedValue = JSON.stringify(value);
		localStorage.setItem(key, serializedValue);
	} catch (e) {
		console.error("Set state error", error.message);
	}
};

//load/read the data from the localStorage

export const load = (key) => {
	try {
		let dataFromLocalStorage = localStorage.getItem(key);

		//ternary operator -> one liner if else
		// condition ? if true do this : else do this

		// if (dataFromLocalStorage === null) return undefined;
		// else return JSON.parse(dataFromLocalStorage);

		return dataFromLocalStorage === null ? undefined : JSON.parse(dataFromLocalStorage);
	} catch (e) {
		console.error("Get state error", e.message);
	}
};
