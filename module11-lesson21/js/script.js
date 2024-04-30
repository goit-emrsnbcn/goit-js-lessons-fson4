import { addTodo, updateTodo, deleteTodo, getTodos } from "./api.js";

const addBtnEl = document.getElementById("addBtn");
const myUL = document.getElementById("myUL");
const myInput = document.getElementById("myInput");
let currentId = 1;

function addCloseBtn(li) {
	let span = document.createElement("span"); //<span></span>
	let txt = document.createTextNode("\u00D7"); //X
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
}

function createLi(text, isDone = false, id = currentId) {
	let li = document.createElement("li"); //<li></li>
	li.innerText = text; //<li>Eat</li>
	li.dataset.id = id; //<li data-id="1" >Eat</li>
	myUL.appendChild(li);

	if (isDone) li.className = "checked";
	addCloseBtn(li);
}

function fillTodoList() {
	getTodos()
		.then((todos) => {
			todos.forEach(({ text, isDone, id }) => createLi(text, isDone, id));
		})
		.then((todos) => {
			// ? optional chaining - it doesnt give you the error while waiting for the data.
			if (todos?.length > 0) {
				currentId = parseInt(todos[todos.length - 1].id) + 1;
			}
		});
}

addBtnEl.addEventListener("click", async () => {
	let todo = myInput.value.trim();

	if (todo === "") {
		alert("Type a todo");
		return;
	}

	let todoObj = {
		text: todo,
	};
	try {
		let todoRes = await addTodo(todoObj);
		if (todoRes.status === 201) {
			createLi(todo);
			alert("Todo added successfully");
		}
	} catch (e) {
		alert("Something went wrong please try again");
	}

	// addTodo(todoObj)
	// 	.then((res) => {
	// 		if (res.ok && res.status === 201) {
	// 			createLi(todo);
	// 			alert("Todo added successfully");
	// 		}
	// 	})
	// 	.catch((e) => alert("Something went wrong please try again"));
});

myUL.addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		updateTodo(e.target.dataset.id, e.target.classList.contains("checked"));
		e.target.classList.toggle("checked");
	}

	if (e.target.getAttribute("class") === "close") {
		if (confirm("Are you sure you want to delete this todo?")) {
			deleteTodo(e.target.parentElement.getAttribute("data-id"));
			e.target.parentNode.remove();
		}
	}
});

window.addEventListener("DOMContentLoaded", fillTodoList);
