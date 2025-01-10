const myBox = document.getElementsByClassName("image1")[0];
const moveAmount = 10;
let x = 0;
let y = 0;

const otherContent = document.createElement("div"); //<div></div>
otherContent.className = "image2";    // <div class="image1"></div>
const image = document.createElement("img");  // <div class="image1"> <img> </div>
image.src = "gift-image.png";  //<div class="image1"> <img src="gift-image.png"> </div>


//Adds image to the "div" element under the class,"image2".
otherContent.appendChild(image);

//Store the original image src
const originalImageSrc = myBox.querySelector("img").src;


document.addEventListener("keydown", event => {
    //change image to gift image
    myBox.querySelector("img").src = otherContent.querySelector("img").src;
    //Change background to tomato color
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.querySelector("img").src = originalImageSrc; //Reverts back to the black hole
    myBox.style.backgroundColor = "lightBlue"; // Reset to original background color
});

document.addEventListener("keydown", event => {
    
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;

    }
});