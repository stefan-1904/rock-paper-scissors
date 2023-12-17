let playerPrompt = prompt("Choose either rock, paper or scissors:");

function playerInput() {
    let lowerPrompt = playerPrompt.toLowerCase();

    if (lowerPrompt == 'rock') {
        return 1;
    } else if (lowerPrompt == 'paper') {
        return 2;
    } else if (lowerPrompt == 'scissors') {
        return 3;
    } else  {
        console.log('Invalid option');
    }
}
    
console.log(playerInput());

function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"];
    let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];

    if (randomChoice == 'rock') {
        return 1;
    } else if (randomChoice == 'paper') {
        return 2;
    } else if (randomChoice == 'scissors') {
        return 3;
    }
}

console.log(getComputerChoice());

function gameRound(playerSelection, computerSelection) {
    playerSelection = playerInput();
    computerSelection = getComputerChoice();
}

console.log(gameRound())