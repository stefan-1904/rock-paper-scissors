function getComputerChoice() {
    let choiceArray = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    let randomIndex = Math.floor(Math.random() * choiceArray.length);
    let randomChoice = choiceArray[randomIndex];
    return randomChoice;
}

console.log(getComputerChoice());

// function gameRound(playerSelection, computerSelection) {
    
// }