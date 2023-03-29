let content = document.querySelector("#content");
let inputText = document.querySelector("#text");
const button = document.querySelector("#btn");
let key = 1;

function AddComponent() {
	let textSpan = document.createElement("span");
	let divComponent = document.createElement("div");
	divComponent.classList.add("newComponent");

	textSpan.innerText = inputText.value;
	if (inputText.value === "") {
		return;
	}
	inputText.value = "";
	content.appendChild(divComponent);
	divComponent.appendChild(textSpan);

	let btnComponent = document.createElement("button");
	let textButton = document.createElement("span");
	const text = document.createTextNode("Удалить");
	btnComponent.classList.add("btnNewComponent");
	textButton.classList.add("spanText");
	textButton.appendChild(text);
	btnComponent.appendChild(textButton);
	divComponent.appendChild(btnComponent);

	btnComponent.onclick = function RemoveComponent() {
		divComponent.remove();
		btnComponent.remove();
		textButton.remove();
		text.remove();
		textSpan.remove();
	};
}

button.onclick = function () {
	AddComponent();
};
