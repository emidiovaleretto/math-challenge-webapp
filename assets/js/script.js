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

function runGame() {

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
