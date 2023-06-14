var collectionTaskBlock = document.querySelector(".collection-task-block");
var inputText = document.querySelector(".in-task");
function createTask() {
    var task = document.createElement('div');
    task.classList.add("task-block");
    var textTask = document.createElement('span');
    textTask.classList.add("text-task");
    textTask.innerText = (inputText === null || inputText === void 0 ? void 0 : inputText.value) || '';
    task.appendChild(textTask);
    var btnBlock = document.createElement('div');
    btnBlock.classList.add("btn-block");
    var btnRedaction = document.createElement('button');
    btnRedaction.classList.add("btn-redaction");
    btnRedaction.innerText = "Редактировать";
    var btnDelete = document.createElement('button');
    btnDelete.classList.add("btn-delete");
    btnDelete.innerText = "Удалить";
    btnBlock.appendChild(btnRedaction);
    btnBlock.appendChild(btnDelete);
    var checkBoxInput = document.createElement('input');
    checkBoxInput.type = "checkbox";
    checkBoxInput.classList.add("check-input");
    task.appendChild(checkBoxInput);
    task.appendChild(btnBlock);
    collectionTaskBlock === null || collectionTaskBlock === void 0 ? void 0 : collectionTaskBlock.appendChild(task);
    if (inputText) {
        inputText.value = "";
    }
}
document.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("btn-create-task")) {
        if ((inputText === null || inputText === void 0 ? void 0 : inputText.value.trim()) !== "") {
            createTask();
        }
    }
});
