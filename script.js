// Function: play against computer
// Computer randomly returns "rock" "paper" or "scissors"
function getComputerChoice() {
    const allChoices = ["Rock", "Paper", "Scissors"];
    let selection = Math.floor(Math.random() * allChoices.length)

    return allChoices[selection];
}

console.log(getComputerChoice());

// Function: play a single round
// Requires computer's selection, user's selection
// Compare computer vs. user using if/else statements
// Return string to declare winner of the round
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = prompt(`Make a selection: "Rock", "Paper", or "Scissors"`).toLowerCase();

    console.log(computerSelection, playerSelection);

    let playerWins = `You win! ${playerSelection} beats ${computerSelection}`;
    let computerWins = `You lose! ${computerSelection} beats ${playerSelection}`;
    let draw = `It's a tie! Both selected ${playerSelection}`
    let winningMessage;
    
    if (playerSelection == "rock" && computerSelection == "scissors") {
        winningMessage = playerWins;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winningMessage = playerWins;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winningMessage = playerWins;
    } else if (playerSelection == computerSelection) {
        winningMessage = draw;
    } else {
        winningMessage = computerWins;
    }
    
    return winningMessage;
}

console.log(playRound());


// Write function that plays 5 rounds using the function above ^^
    // Use console.log() to display who the winner is after each round
    // Get user input using prompt()

