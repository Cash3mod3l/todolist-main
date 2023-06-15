function clickDeleteTask(): void {
    const task: HTMLDivElement | null = document.querySelector(".task-block");

    task?.remove();
}

function clickRedaction(): void {
    const taskBlock: HTMLDivElement | null = document.querySelector(".task-block");
    const btnBlock: HTMLDivElement | null = document.querySelector(".btn-block");
    const taskText: HTMLSpanElement | null = document.querySelector(".text-task");
    const input: HTMLInputElement = document.createElement("input");

    input.classList.add("redaction-input");

    input.addEventListener("blur", function () {
        if (btnBlock && taskBlock) {
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
        if (btnBlock && taskBlock) {
            btnBlock.style.visibility = "hidden";
        }
    });

    if (taskText && btnBlock) {
        taskText.innerText = "";
        taskText.appendChild(input);
        input.focus();
    }
}





document.addEventListener("click", function(event) {
    const target  = event.target as HTMLElement;

    if (target.classList.contains("btn-delete")) {
        clickDeleteTask();
    }
    if (target.classList.contains("btn-redaction")) {
        clickRedaction();
    }
})
