function clickDeleteTask() {
    var task = document.querySelector(".task-block");
    task === null || task === void 0 ? void 0 : task.remove();
}
function clickRedaction() {
    var btnBlock = document.querySelector(".btn-block");
    var taskText = document.querySelector(".text-task");
    var input = document.createElement("input");
    input.addEventListener("blur", function () {
        if (btnBlock) {
            btnBlock.style.visibility = "visible";
        }
        if (input.value.trim() !== "") {
            if (taskText) {
                taskText.innerText = input.value;
            }
        }
        if (taskText && taskText.parentNode) {
            taskText.parentNode.removeChild(input);
        }
    });
    input.addEventListener("focus", function () {
        if (btnBlock) {
            btnBlock.style.visibility = "hidden";
        }
    });
    if (taskText && btnBlock) {
        taskText.appendChild(input);
        input.focus();
    }
}
document.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("btn-delete")) {
        clickDeleteTask();
    }
    if (target.classList.contains("btn-redaction")) {
        clickRedaction();
    }
});
