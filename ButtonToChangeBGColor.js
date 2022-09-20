const button = document.querySelector(".btn");
const text1 = document.querySelector(".headline");
const body1 = document.body;

button.addEventListener("click", ()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // Math.random() gives values between 0 >= value < 1 in decimal.
    // Math.floor() returns the round-off value of smallest-nearest whole number.
    text1.textContent = `Current Color : rgb(${red}, ${green}, ${blue})`;
    body1.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});