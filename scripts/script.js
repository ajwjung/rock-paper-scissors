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
            div.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            ++playerScore;
        } else if (playerSelection == computerSelection) {
            div.textContent = `It's a tie! Both selected ${playerSelection}`;
        } else {
            div.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            ++computerScore;
        }
    } else if (playerScore == 5) {
        div.textContent = "Congratulations! You won the game!";
    } else if (computerScore == 5) {
        div.textContent = "Sorry, you lost! Better luck next time!";
    }
}

const btns = document.querySelectorAll("button");
const div = document.querySelector(".results");

btns.forEach((button) => {
    button.addEventListener("click", function (e) {
        let player = button.id;
        let computer = getComputerChoice();
        
        playRound(player, computer);
    });
});
