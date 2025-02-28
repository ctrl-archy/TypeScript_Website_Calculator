"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Here we go again ✨');
var mathjs_1 = require("mathjs");
/*
const num_buttons = document.querySelectorAll(".Numbers");
const eq_buttons = document.querySelectorAll(".Equation");


num_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = (button as HTMLButtonElement).value;
        output.textContent = `Clicked: ${value}`;
    });
});
*/
// const display:string = document.getElementById("display");
/*let foodName = (document.getElementById("display") as HTMLInputElement).value;

function addToDisplay() {
    foodName.valueOf += input;
}

function clearDisplay() {


}

function calculate() {


}*/
var userInput = document.getElementById('display');
var result = document.getElementById('result');
var equation;
(_a = document.getElementById('equals')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    equation = userInput.value;
    result.textContent = (0, mathjs_1.evaluate)(equation);
});
