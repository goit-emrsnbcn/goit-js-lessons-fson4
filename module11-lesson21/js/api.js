const BASE_URL = "https://662f87e243b6a7dce30fcf99.mockapi.io/todos";

//GET ALL TODOS
export const getTodos = async () => {
	//fetch, decode, execute
	// return fetch(BASE_URL).then((res) => res.json());
	let res = await axios.get(BASE_URL);
	return res.data;
};

//ADD A TODO
export const addTodo = async (todo) => {
	// return fetch(BASE_URL, {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// 	body: JSON.stringify(todo), // "{'text': 'Eat'}"
	// });

	let res = await axios.post(BASE_URL, todo);
	return res;
};

//DELETE A TODO
export const deleteTodo = (id) => {
	// return fetch(`${BASE_URL}/${id}`, {
	// 	method: "DELETE",
	// });
	return axios.delete(`${BASE_URL}/${id}`);
};

//UPDATE A TODO
export const updateTodo = (id, status) => {
	return fetch(`${BASE_URL}/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ isDone: !status }),
	});
};
