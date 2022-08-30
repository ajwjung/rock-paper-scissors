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

console.log(playRound());


// Function: play 5 rounds using a loop and playRound()
// Use if/else statements to tally player and computer scores each round
// Compare scores using if/else and print the final winner to console

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        
        // Increment winner's score by 1
    }

    return `${playerScore} vs. ${computerScore}`;
}

console.log(game());