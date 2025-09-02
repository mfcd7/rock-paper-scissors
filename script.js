let humanScore = 0, computerScore = 0, roundsPlayed = 0;

const result = document.querySelector(".result-content");
const score = document.querySelector(".score-content");
const finalScore = document.querySelector(".final-score-content");
const finalResult = document.querySelector(".final-result-content");

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            result.textContent = "Tie!";
        } else if (computerChoice === "paper") {
            result.textContent = "You lose! Paper beats Rock";
            computerScore++;
        } else if (computerChoice === "scissors") {
            result.textContent = "You win! Rock beats Scissors";
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            result.textContent = "You win! Paper beats Rock";
            humanScore++;
        } else if (computerChoice === "paper") {
            result.textContent = "Tie!";
        } else if (computerChoice === "scissors") {
            result.textContent = "You lose! Scissors beat Paper";
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            result.textContent = "You lose! Rock beats Scissors";
            computerScore++;
        } else if (computerChoice === "paper") {
            result.textContent = "You win! Scissors beat Paper";
            humanScore++;
        } else if (computerChoice === "scissors") {
            result.textContent = "Tie!";
        }
    }
}


function playGame() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (roundsPlayed >= 5) return;

            const computerSelection = getComputerChoice();
            const humanSelection = button.id;
            score.textContent = `You: ${humanSelection} Computer: ${computerSelection}`;
            playRound(humanSelection, computerSelection);
            roundsPlayed++;

            if (roundsPlayed === 5) {
                finalScore.textContent = `Final score- You: ${humanScore} Computer: ${computerScore}`;

                if (humanScore > computerScore) {
                    finalResult.textContent = "You are the winner!";
                } else if (computerScore > humanScore) {
                    finalResult.textContent = "Computer is the winner";
                } else {
                    finalResult.textContent = "It's a tie overall";
                }                
            }
        });
    });

    
}

playGame();