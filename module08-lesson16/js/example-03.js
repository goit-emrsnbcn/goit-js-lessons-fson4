import { save, load } from "./storage.js";

const formData = {
	email: "johndoe@gmail.com",
	message: "Hello this is john doe",
};

save("form-data", formData);

const data = load("form");
console.log(data);
