"use strict";
console.log('Here we go again ✨');
const num_buttons = document.querySelectorAll(".Numbers");
const eq_buttons = document.querySelectorAll(".Equation");
const output = document.getElementById("output");
num_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.value;
        output.textContent = `Clicked: ${value}`;
    });
});
