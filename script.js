// Function: play against computer
// Computer randomly returns "rock" "paper" or "scissors"
function getComputerChoice() {
    const allChoices = ["Rock", "Paper", "Scissors"];
    let selection = Math.floor(Math.random() * allChoices.length)

    return allChoices[selection];
}

console.log(getComputerChoice());

// Write function to play a single round
// Function takes two parameters: player selection and computer selection
    // Must be case insensitive ^^
// Return a statement that declares the winner (NOT console.log())

// Write function that plays 5 rounds using the function above ^^
    // Use console.log() to display who the winner is after each round
    // Get user input using prompt()

