document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (button of buttons) {

        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                console.log("You clicked on submit button");
            } else {
                let gameType = this.getAttribute("data-type");
                console.log(`You clicked on ${gameType} button.`);
            }
        })
    }
})

/**
 * The main game function is called when the script is first
 * loaded and after the user's answer has been processed.
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
