export function getButton(selector) {
	return document.querySelector(selector);
}

export function enable(button, nextPage) {
	button.disabled = false;
	button.textContent = "Load More";
	button.dataset.page = nextPage;
}

export function disable(button) {
	button.disabled = true;
	button.textContent = "Loading...";
}

export function hide(button) {
	button.classList.add("hidden");
}

export function show(button) {
	button.classList.remove("hidden");
}
