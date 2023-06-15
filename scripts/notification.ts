const inText: HTMLInputElement | null = document.querySelector(".in-task");
const body: HTMLBodyElement | null = document.querySelector("body");

const notifBlock: HTMLDivElement | null = document.createElement("div");
notifBlock.classList.add("notification");

function notificationCall(): void {
    if (inText?.value.trim().length === 0){
        if(notifBlock) {
            notifBlock.innerText = "Заполните поле";
                
            setTimeout(
                (): void => {
                    notifBlock.classList.add("show");
                },
                0
            );
            body?.appendChild(notifBlock);
                
            setTimeout(
                (): void => {
                    notifBlock.classList.remove("show");
                },
                3000
            );
        }
    }   
}

document.addEventListener("click", function(event) {
    const target  = event.target as HTMLElement;

    if (target.classList.contains("btn-create-task")) {
        notificationCall();
    }
})