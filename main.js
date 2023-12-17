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
getComputerChoice();

console.log(getComputerChoice());

function gameRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Draw");
    } else if (playerSelection === 1 && computerSelection === 2) {
        console.log('Lose!');
    } else if (playerSelection === 1 && computerSelection === 3) {
        console.log('Win!');
    } else if (playerSelection === 2 && computerSelection === 1) {
        console.log('Win!');
    } else if (playerSelection === 2 && computerSelection === 3) {
        console.log('Lose!');
    } else if (playerSelection === 3 && computerSelection === 1) {
        console.log('Lose!');
    } else if (playerSelection === 3 && computerSelection === 2) {
        console.log('Win!');
    }
}
gameRound(playerSelection, computerSelection);