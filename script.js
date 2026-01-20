let counter = 0;

const counterValue = document.getElementById("counter-value");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateCounter() {
    counterValue.innerText = counter;
    counterValue.style.color = counter < 0 ? "red" : "green";
}

increaseBtn.addEventListener("click", () => {
    counter++;
    updateCounter();
});

decreaseBtn.addEventListener("click", () => {
    counter--;
    updateCounter();
});

resetBtn.addEventListener("click", () => {
    counter = 0;
    updateCounter();
});


updateCounter();




const inputBox = document.getElementById("text-input");
const updateTextBtn = document.getElementById("update-text");
const displayText = document.getElementById("display-text");

updateTextBtn.addEventListener("click", () => {
    const text = inputBox.value.trim();
    
    if (text === "") {
        alert("Please enter text");
    } else {
        displayText.innerText = text;
    }
});




const themeBtn = document.getElementById("theme-toggle");
let darkMode = false;

themeBtn.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        themeBtn.innerText = "Switch to Light Mode";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        themeBtn.innerText = "Switch to Dark Mode";
    }
});



const image = document.getElementById("toggle-image");
const changeImgBtn = document.getElementById("change-image");

let imgToggle = true;

changeImgBtn.addEventListener("click", () => {
    if (imgToggle) {
        image.src = "img2.jpg";
    } else {
        image.src = "img1.jpg";
    }
    imgToggle = !imgToggle;
});
