/*
EXAMPLE 1
-create a list in HTML 
-target the list by its id using getElementById and querySelector
-console the output of the list
*/

let fruitsById = document.getElementById("fruits");
console.log(fruitsById.children);
// console.log(fruitsById.lastElementChild);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
let fruitsByQuery = document.querySelector("#fruits");
// console.log(fruitsById);
// console.log(fruitsByQuery);

let technologies = ["HTML", "CSS", "JavaScript", "React"];
let ul = document.createElement("ul");
let container = document.getElementById("container");
/*

    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
    </ul>
*/

for (let technology of technologies) {
	let li = document.createElement("li"); //<li></li>
	li.innerText = technology; //<li>React</li>
	ul.appendChild(li);
}

container.append(ul);

/* EXAMPLE 3.
Create several buttons based on an array of objects using createElement

    1. Iterate through the array of colors using a loop
    2. Create a button
    3. Set the background color of the button
    4. Set the text of the button
    5. Add a button to the document

*/

const colors = [
	{
		label: "red",
		color: "#FF0000",
	},
	{
		label: "green",
		color: "#00FF00",
	},
	{
		label: "blue",
		color: "#0000FF",
	},
	{
		label: "yellow",
		color: "#FFFF00",
	},
];

colors.forEach(({ label, color }) => {
	let btn = document.createElement("button"); //<button></button>
	btn.innerText = label;
	btn.style.backgroundColor = color;
	container.appendChild(btn);
});
