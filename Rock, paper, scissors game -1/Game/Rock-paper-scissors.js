let userCounter = 0;
let pcCounter = 0;
let popUp = document.getElementById("pop-up");

function play(userChoice) {
    const options = ['rock', 'paper', 'scissors'];
    const pcChoice = options[Math.floor(Math.random() * options.length)];
    let result;
    (function getWinner() {
        if (userChoice === pcChoice) {
            result = "draw";
            return;
        }
        if (userChoice === "rock" && pcChoice === "paper") {
            result = "Pc wins";
            pcCounter++;
            return;
        }
        if (userChoice === "rock" && pcChoice === "scissors") {
            result = "User wins";
            userCounter++;
            return;
        }
        if (userChoice === "paper" && pcChoice === "rock") {
            result = "User wins";
            userCounter++;
            return;
        }
        if (userChoice === "paper" && pcChoice === "scissors") {
            result = "Pc wins";
            pcCounter++;
            return;
        }
        if (userChoice === "scissors" && pcChoice === "paper") {
            result = "User wins";
            userCounter++;
            return;
        }
        if (userChoice === "scissors" && pcChoice === "rock") {
            result = "Pc wins";
            pcCounter++;
            return;
        }
    })()
    document.getElementById("user-counter").innerText = `${userCounter}`;
    document.getElementById("pc-counter").innerText = `${pcCounter}`;
    (function getResult() {
        const pcChoiceDisplay = document.getElementById("pc-choice");
        const userChoiceDisplay = document.getElementById("user-choice");
        const resultStatement = document.getElementById("result-statement");

        pcChoiceDisplay.innerText = `Machine choose ${pcChoice}`;
        userChoiceDisplay.innerText = `You choose ${userChoice}`;

        if (userChoice === pcChoice) {
            resultStatement.innerText = "What were the odds... 1/3 more specifically"
        } else if (result === "Pc wins") {
            resultStatement.innerText = "One step forward for machine to replace us :("
        } else if (result === "User wins") {
            resultStatement.innerText = "Humanity prevails"
        }
    })()
    openPopUp()
}

function toggleChoice() {
    const container = document.getElementById("toogle-choice-ctn");
    const button = document.getElementById("toogle-btn");
    if (container.style.display === "none") {
        container.style.display = "block";
        button.innerText = "Stop";
    } else {
        container.style.display = "none";
        button.innerText = "Play";
    }
}

function toggleTheme() {
    const button = document.getElementById("flexSwitchCheckDefault");
    const container = document.body;

    if (button.checked) {
        container.classList.add("theme-switch-dark");
    } else {
        container.classList.remove("theme-switch-dark");
    }
}

function openPopUp() {
    popUp.classList.add("pop-up-display");
} 

function closePopUp() {
    popUp.classList.remove("pop-up-display");
}
