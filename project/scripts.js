let content = document.querySelector("#content");
let inputText = document.querySelector("#text");
const button = document.querySelector("#btn");
let key = 1;

function NewTask() {
	const newTextSpan = document.createElement("span");
	const divComponent = document.createElement("div");
	const buttonBlock = document.createElement("div");

	buttonBlock.classList.add("buttonBlock");
	divComponent.classList.add("newComponent");
	newTextSpan.classList.add("newTextSpan");

	newTextSpan.innerText = inputText.value;
	if (!inputText.value) {
		return;
	}

	inputText.value = "";

	divComponent.appendChild(newTextSpan);
	divComponent.appendChild(buttonBlock);

	const deleteBtn = document.createElement("button");
	const textButton = document.createElement("span");
	const deleteText = document.createTextNode("Удалить");

	deleteBtn.classList.add("btnRed");
	textButton.classList.add("spanText");

	textButton.appendChild(deleteText);
	deleteBtn.appendChild(textButton);
	buttonBlock.appendChild(deleteBtn);

	const redactionBtn = document.createElement("button");
	const redactText = document.createTextNode("Редактировать");
	const textButtonRedact = document.createElement("span");

	textButtonRedact.classList.add("spanText");
	redactionBtn.classList.add("btnGreen");

	textButtonRedact.appendChild(redactText);
	redactionBtn.appendChild(textButtonRedact);
	buttonBlock.appendChild(redactionBtn);

	const checkBox = document.createElement("input");

	checkBox.type = "checkbox";
	checkBox.classList.add("checkBox");

	divComponent.appendChild(checkBox);

	checkBox.onchange = function Check() {
		divComponent.classList.toggle("complete");
	};

	let div = content.appendChild(divComponent);
	localStorage.setItem(key, JSON.stringify(div.innerText));
	div.dataset.key = key;

	JSON.parse(localStorage.getItem(key));

	key++;
	deleteBtn.onclick = function Remove() {
		divComponent.remove();
		const btnKey = this.closest(".newComponent").dataset.key;
		localStorage.removeItem(btnKey);
	};
}

button.onclick = function () {
	NewTask();
};
