function getComputerChoice() {
    const allChoices = ["rock", "paper", "scissors"];
    let selection = Math.floor(Math.random() * allChoices.length)

    return allChoices[selection];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock") {
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            ++playerScore;
        } else if (playerSelection == computerSelection) {
            results.textContent = `It's a tie! Both selected ${playerSelection}`;
        } else {
            results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            ++computerScore;
        }
        
        scoreBox.textContent = `Player: ${playerScore} vs. Computer: ${computerScore}`;
    }
    
    if (playerScore == 5) {
        results.textContent = "Congratulations! You won the game!";
    } else if (computerScore == 5) {
        results.textContent = "Sorry, you lost! Better luck next time!";
    }
}

const btns = document.querySelectorAll("button");
const results = document.querySelector(".results");
const scoreBox = document.querySelector(".scores");

btns.forEach((button) => {
    button.addEventListener("click", function (e) {
        let player = button.id;
        let computer = getComputerChoice();
        
        playRound(player, computer);
    });
});
