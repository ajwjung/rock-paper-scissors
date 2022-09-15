function getComputerChoice() {
    const allChoices = ["Rock", "Paper", "Scissors"];
    let selection = Math.floor(Math.random() * allChoices.length)

    return allChoices[selection];
}

// Plays one round
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();

    let playerWins = `You win! ${playerSelection} beats ${computerSelection}`;
    let computerWins = `You lose! ${computerSelection} beats ${playerSelection}`;
    let draw = `It's a tie! Both selected ${playerSelection}`
    let thisRoundWinner;
    
    if (playerSelection == "rock" && computerSelection == "scissors") {
        div.textContent = playerWins;
        thisRoundWinner = "player";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        div.textContent = playerWins;
        thisRoundWinner = "player";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        div.textContent = playerWins;
        thisRoundWinner = "player";
    } else if (playerSelection == computerSelection) {
        div.textContent = draw;
        thisRoundWinner = "draw";
    } else {
        div.textContent = computerWins;
        thisRoundWinner = "computer";
    }
    
    return thisRoundWinner;
}

const btns = document.querySelectorAll("button");
const div = document.querySelector(".results");

btns.forEach((button) => {
    button.addEventListener("click", function (e) {
        playRound(button.id)
    });
});

