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
        results.style.color = "rgb(221, 168, 168)";
        restart.style.visibility = "visible";
    } else if (computerScore == 5) {
        results.textContent = "Sorry, you lost! Better luck next time!";
        results.style.color = "rgb(175, 207, 199)";
        restart.style.visibility = "visible";
    }
}

const btns = document.querySelectorAll(".choices");
const restart = document.querySelector("#restart");
const results = document.querySelector(".results");
const scoreBox = document.querySelector(".scores");

scoreBox.style.visibility = "hidden";
restart.style.visibility = "hidden";

btns.forEach((button) => {
    button.addEventListener("click", function (e) {
        let player = button.id;
        let computer = getComputerChoice();

        scoreBox.style.visibility = "visible";
        
        playRound(player, computer);
    });
});

restart.addEventListener("click", function (e) {
    playerScore = 0;
    computerScore = 0;
    results.style.color = "rgb(240, 240, 240)";
    results.textContent = "Good luck!";
    scoreBox.textContent = "";
    restart.style.visibility = "hidden";
})