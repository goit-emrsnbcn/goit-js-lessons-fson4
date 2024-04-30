//async / await - is just a syntactic sugar on handling promises

fetch(URL)
	.then((res) => res.json())
	.then((data) => data)
	.catch((e) => console.error(e));

//with async await it helps us type our code in synchronous way

async function getData() {
	try {
		let res = await fetch(url);
		let data = await res.json();
		return data;
	} catch (e) {
		console.error(e);
	}
}
