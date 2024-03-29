let openModalBtn = document.getElementById("openModalBtn");
let closeBtn = document.getElementById("closeBtn");
let overlay = document.getElementById("overlay");

openModalBtn.addEventListener("click", handleModalOpen);
closeBtn.addEventListener("click", handleModalClose);
overlay.addEventListener("click", handleModalClose);
document.addEventListener("keydown", handleModalCloseOnESC);

function handleModalOpen() {
	document.body.classList.add("open");
}

function handleModalClose() {
	document.body.classList.remove("open");
}

function handleModalCloseOnESC(e) {
	if (e.key === "Escape") {
		handleModalClose();
	}
}
