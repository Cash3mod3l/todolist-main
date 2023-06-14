const collectionTaskBlock: HTMLDivElement | null = document.querySelector(".collection-task-block");
const inputText: HTMLInputElement | null = document.querySelector(".in-task");


function createTask (): void {
    const task: HTMLDivElement = document.createElement('div');
    task.classList.add("task-block");
    
    const textTask: HTMLSpanElement = document.createElement('span');
    textTask.classList.add("text-task");
    textTask.innerText =  inputText?.value || '';
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

    if (inputText) {
        inputText.value = "";
    }
}


document.addEventListener("click", function(event) {
    const target  = event.target as HTMLElement;

    if (target.classList.contains("btn-create-task")) {
        if (inputText?.value.trim() !== "") {
            createTask();
        }
    }
});
