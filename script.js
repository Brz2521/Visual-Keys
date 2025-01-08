const myBox = document.getElementsByClassName("icon-button");
const otherContent = document.getElementsById("otherIcon");

document.addEventListener("keydown", event => {
    myBox.textContent = otherContent;
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
});