console.log('Here we go again ✨')

const num_buttons = document.querySelectorAll(".Numbers");
const eq_buttons = document.querySelectorAll(".Equation");
const output = document.getElementById("output") as HTMLParagraphElement;

num_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = (button as HTMLButtonElement).value;
        output.textContent = `Clicked: ${value}`;
    });
});
