"use strict";

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

let randomValue = getRandomNumber(1, 21);

let score = Number(document.querySelector(".score").textContent);
let highscore = Number(document.querySelector(".highscore").textContent);
let message = document.querySelector(".message");

//When player make a guess
document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);

    breakme: if (!guess) {
        displayMessage("❌ Sem número!");
    } else if (guess !== randomValue) {
        if (guess > 20) {
            displayMessage("❌ Escolha apenas de 1 a 20!");
            break breakme;
        }
        // When guess is wrong
        if (score > 1) {
            score--;
            document.querySelector(".score").textContent = score;

            guess > randomValue
                ? displayMessage("📈 Muito alto!")
                : displayMessage("📉 Muito baixo!");
        } else {
            document.querySelector(".score").textContent = 0;
            document.body.style.backgroundColor = "#571100";
            displayMessage("Você perdeu o jogo! 💥");
        }
    } else {
        // When guess is right
        displayMessage("🎉 Número correto!");
        document.querySelector(".number").textContent = randomValue;

        document.body.style.backgroundColor = "#00A36C";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = score;
        }
    }
});

// When player restart the game
document.querySelector(".again").addEventListener("click", function () {
    randomValue = getRandomNumber(1, 21);

    score = 20;

    displayMessage("Adivinhe...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;

    document.body.style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
