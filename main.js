let playerPrompt = prompt("Choose either rock, paper or scissors:");

let playerSelection;
function playerInput() {
    let lowerPrompt = playerPrompt.toLowerCase();
    if (lowerPrompt == 'rock') {
        playerSelection = 1;
    } else if (lowerPrompt == 'paper') {
        playerSelection = 2;
    } else if (lowerPrompt == 'scissors') {
        playerSelection = 3;
    } else  {
        console.log('Invalid option');
    }
    return playerSelection;
}
playerInput();

console.log(playerInput());

let computerSelection;
function getComputerChoice() {
    let choiceArray = ["rock", "paper", "scissors"];
    let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    if (randomChoice == 'rock') {
        computerSelection = 1;
    } else if (randomChoice == 'paper') {
        computerSelection = 2;
    } else if (randomChoice == 'scissors') {
        computerSelection = 3;
    }
    return computerSelection;
}

console.log(getComputerChoice());

function gameRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw!';
    } else if (playerSelection === 1 && computerSelection === 2) {
        return 'Lose!';
    } else if (playerSelection === 1 && computerSelection === 3) {
        return 'Win!';
    } else if (playerSelection === 2 && computerSelection === 1) {
        return 'Win!';
    } else if (playerSelection === 2 && computerSelection === 3) {
        return 'Lose!';
    } else if (playerSelection === 3 && computerSelection === 1) {
        return 'Lose!';
    } else if (playerSelection === 3 && computerSelection === 2) {
        return 'Win!';
    }
}

console.log(gameRound(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;

function scoreTally() {
    let result = gameRound(playerSelection, computerSelection);
    if (result === 'Win!') {
        playerScore++;
        return playerScore;
    } else if (result === 'Lose!') {
        computerScore++;
        return computerScore;
    }
}

scoreTally(playerSelection, computerSelection)

console.log("Your score: " + playerScore);
console.log("Computer score: " + computerScore);

// function game() {
    
// }