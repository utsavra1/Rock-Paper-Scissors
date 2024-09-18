const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resultMessageElement = document.getElementById("result-message");

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = getResult(playerChoice, computerChoice);

        displayResult(result, playerChoice, computerChoice);
        updateScores(result);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function displayResult(result, playerChoice, computerChoice) {
    if (result === "win") {
        resultMessageElement.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else if (result === "lose") {
        resultMessageElement.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else {
        resultMessageElement.textContent = `It's a Draw! You both chose ${playerChoice}`;
    }
}

function updateScores(result) {
    if (result === "win") {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (result === "lose") {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}
