let content = document.querySelector("#content");
let inputText = document.querySelector("#text");
const button = document.querySelector("#btn");
let key = 1;

function Component() {
	let textSpan = document.createElement("span");
	let divComponent = document.createElement("div");

	function AddBlockTask() {
		divComponent.classList.add("newComponent");
		textSpan.innerText = inputText.value;
		if (inputText.value === "") {
			return;
		}
		inputText.value = "";
	}
	content.appendChild(divComponent);
	divComponent.appendChild(textSpan);
	AddBlockTask();

	let btnComponent = document.createElement("button");
	let textButton = document.createElement("span");
	const text = document.createTextNode("Удалить");

	function AddButton() {
		btnComponent.classList.add("btnNewComponent");
		textButton.classList.add("spanText");
	}
	textButton.appendChild(text);
	btnComponent.appendChild(textButton);
	divComponent.appendChild(btnComponent);
	AddButton();

	function ClearTask() {
		btnComponent.onclick = function RemoveComponent() {
			divComponent.remove();
			btnComponent.remove();
			textButton.remove();
			text.remove();
			textSpan.remove();
		};
	}
	ClearTask();
}

button.onclick = function () {
	Component();
};
