console.log('Here we go again ✨')
import {evaluate} from "mathjs"

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

let userInput: HTMLInputElement = document.getElementById('display') as HTMLInputElement;
let result: HTMLParagraphElement = document.getElementById('result') as HTMLParagraphElement;
let equation: string;

document.getElementById('equals')?.addEventListener('click', function () {
    equation = userInput.value;
    result.textContent = evaluate(equation)
});
