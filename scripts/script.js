function getComputerChoice() {
    const allChoices = ["Rock", "Paper", "Scissors"];
    let selection = Math.floor(Math.random() * allChoices.length)

    return allChoices[selection];
}

// Plays one round
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();

    let thisRoundWinner;
    
    if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock") {
        div.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        thisRoundWinner = "player";
    } else if (playerSelection == computerSelection) {
        div.textContent = `It's a tie! Both selected ${playerSelection}`;
        thisRoundWinner = "draw";
    } else {
        div.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
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

