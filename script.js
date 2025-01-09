const myBox = document.getElementsByClassName("image1")[0];
const image = document.createElement("img");
image.src = "gift-image.png";
const otherContent = document.createElement("div");
otherContent.className = "image2";

otherContent.appendChild(image);
const originalImageSrc = myBox.querySelector("img").src;


document.addEventListener("keydown", event => {
    myBox.querySelector("img").src = otherContent.querySelector("img").src;
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.querySelector("img").src = originalImageSrc;
    myBox.style.backgroundColor = "lightBlue";
});