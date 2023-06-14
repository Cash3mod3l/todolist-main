const collectionTaskBlock: HTMLDivElement | null = document.querySelector(".collection-task-block");
const inputText: HTMLInputElement | null = document.querySelector(".in-task");

interface ElementTask {
    task: HTMLDivElement | null,
    textTask: HTMLSpanElement | null,
    btnBlock: HTMLDivElement | null,
    btnRedaction: HTMLButtonElement | null,
    btnDelete: HTMLButtonElement | null,
    checkBoxInput: HTMLInputElement | null,
};


function createTask (): ElementTask {
    const task: HTMLDivElement = document.createElement('div');
    task.classList.add("task-block");
    
    const textTask: HTMLSpanElement = document.createElement('span');
    textTask.classList.add("text-task");
    textTask.innerText = inputText !== null ? inputText.value: ''; // проверка на null
    task.appendChild(textTask);

    const btnBlock: HTMLDivElement = document.createElement('div');
    btnBlock.classList.add("btn-block");

    const btnRedaction: HTMLButtonElement = document.createElement('button');
    btnRedaction.classList.add("btn-redaction");
    btnRedaction.innerText = "Редактировать";

    const btnDelete: HTMLButtonElement = document.createElement('button');
    btnDelete.classList.add("btn-delete");
    btnDelete.innerText = "Удалить";
    
    btnBlock.appendChild(btnRedaction);
    btnBlock.appendChild(btnDelete);

    const checkBoxInput: HTMLInputElement = document.createElement('input');
    checkBoxInput.type = "checkbox";
    checkBoxInput.classList.add("check-input");
    task.appendChild(checkBoxInput);
    
    task.appendChild(btnBlock);
    
    collectionTaskBlock?.appendChild(task);

    if (inputText !== null) {
        inputText.value = "";
    }

    return {
        task,
        textTask,
        btnBlock,
        btnRedaction,
        btnDelete,
        checkBoxInput,
    };
}


document.addEventListener("click", function(event) {
    const target  = event.target as HTMLElement;

    if (target.classList.contains("btn-create-task")) {
        if (inputText?.value.trim() === "") {
            return;
        }
        createTask();
    }
});
