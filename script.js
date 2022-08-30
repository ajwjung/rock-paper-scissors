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

// Plays game five times
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winningMessage;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1} is starting...`);
        currentWinner = playRound();
        
        if (currentWinner === "player") {
            console.log(`Player won Round ${i + 1}!`);
            playerScore++;
        } else if (currentWinner === "computer") {
            console.log(`Computer won Round ${i + 1}!`);
            computerScore++;
        } else {
            console.log(`Round ${i + 1} ended in a draw.`);
        }
    }

    if (playerScore > computerScore) {
        winningMessage = "Player won the game!"
    } else if (playerScore < computerScore) {
        winningMessage = "Computer won the game!"
    } else {
        winningMessage = "The game ended in a draw."
    }

    return winningMessage;
}

console.log(game());