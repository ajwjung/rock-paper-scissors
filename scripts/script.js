function getComputerChoice() {
    const allChoices = ["Rock", "Paper", "Scissors"];
    let selection = Math.floor(Math.random() * allChoices.length)

    return allChoices[selection];
}

// Plays one round
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = prompt(`Make a selection: "Rock", "Paper", or "Scissors"`).toLowerCase();

    let playerWins = `You win! ${playerSelection} beats ${computerSelection}`;
    let computerWins = `You lose! ${computerSelection} beats ${playerSelection}`;
    let draw = `It's a tie! Both selected ${playerSelection}`
    let thisRoundWinner;
    
    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log(playerWins);
        thisRoundWinner = "player";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(playerWins);
        thisRoundWinner = "player";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(playerWins);
        thisRoundWinner = "player";
    } else if (playerSelection == computerSelection) {
        console.log(draw);
        thisRoundWinner = "draw";
    } else {
        console.log(computerWins);
        thisRoundWinner = "computer";
    }
    
    return thisRoundWinner;
}

const btns = document.querySelectorAll("button");

btns.forEach((button) => {
    button.addEventListener("click", playRound);
});
