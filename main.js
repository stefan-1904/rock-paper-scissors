let playerCount = 0;
let computerCount = 0;
let playerSelection;

let rk = document.querySelector('#rock');
let pr = document.querySelector('#paper');
let srs = document.querySelector('#scissors');

function getComputerChoice() {
    let choiceArray = ['rock', 'paper', 'scissors'];
    let randomSelection = Math.floor(Math.random() * choiceArray.length);
    let computerChoice = choiceArray[randomSelection];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Tie');
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        console.log('Win');
        playerCount++;
    } else {
        console.log('Lose');
        computerCount++;
    }

    console.log('End of round: Player has ' + playerCount + ' points. Computer has ' + computerCount + ' points.')
}

rk.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
})

pr.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
})

srs.addEventListener('click', () => {
    playerSelection = 'scissors';
    game();
})

function game() {
    if (playerCount < 5 && computerCount < 5) {
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    } else {
        if (playerCount === 5 && computerCount < 5) {
            console.log('Winner');
        } else if (playerCount < 5 && computerCount === 5) {
            console.log('Loser');
        } else {
            console.log('Tie');
        }
        return;
    }
}