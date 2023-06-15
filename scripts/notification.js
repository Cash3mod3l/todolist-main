var inText = document.querySelector(".in-task");
var body = document.querySelector("body");
var notifBlock = document.createElement("div");
notifBlock.classList.add("notification");
function notificationCall() {
    if ((inText === null || inText === void 0 ? void 0 : inText.value.trim().length) === 0) {
        if (notifBlock) {
            notifBlock.innerText = "Заполните поле";
            setTimeout(function () {
                notifBlock.classList.add("show");
            }, 0);
            body === null || body === void 0 ? void 0 : body.appendChild(notifBlock);
            setTimeout(function () {
                notifBlock.classList.remove("show");
            }, 3000);
        }
    }
}
document.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("btn-create-task")) {
        notificationCall();
    }
});
