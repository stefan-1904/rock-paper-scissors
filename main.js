// Declares global scoreboard variables.
let playerWins = 0;
let computerWins = 0;

// Runs the following code when both parties have a score less than five.
while (playerWins < 5 && computerWins < 5) {

    // Handles the users' input and changes input string to lowercase.
    let userPrompt = prompt("Choose rock paper or scissors:");
    let userChoice = userPrompt.toLowerCase();

    // Generates array for computer.
    let computerArray = ["rock", "paper", "scissors"];

    // Declares a randomIndex variable which generates a random number between 0 and 1, rounds it down to the nearest whole number, and then multiplying it to the length of the array which will give 1, 2 or 3.
    let randomIndex = Math.floor(Math.random() * computerArray.length);
    
    // Declares a variable to get a random string from the array.
    let computerChoice = computerArray[randomIndex];
    
    // If the user doesn't input rock, paper or scissors, it will call userPrompt so the user can enter a valid string.
    if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
            console.log('Invalid Option. Please re-enter your choice!');
            userPrompt;
        
            // If the users' prompt is equal to rock, paper, or scissors, then continue with gameRound, using the userChoice and computerChoice as parameters.
        } else gameRound(userChoice, computerChoice);
}

function gameRound(userChoice, computerChoice) {
    // Checks if both userChoice, and computerChoice are strictly equal.
    if (userChoice === computerChoice) {
        console.log("It's a draw!");
        console.log('The score remains the same!')
    } else if (
        // This block handles the winning combinations.
        userChoice === 'rock' && computerChoice === 'scissors' ||
        userChoice === 'paper' && computerChoice === 'rock' ||
        userChoice === 'scissors' && computerChoice === 'paper'
    ) {
        // If any of the winning combinations are true, then a win is added to the global variable invoked earlier.
        playerWins++;
        console.log('Round goes to you!');
        console.log('The score is now:');
        // These two logs will update outputted scoreboard each round by showing the user and computer scores.
        console.log('Player: ' + playerWins);
        console.log('Computer: ' + computerWins);
    } else {
        // If none of the winning combinations are true, then a point is added to the computer.
        computerWins++;
        console.log('Round goes to computer!');
        console.log('The score is now:');
        console.log('Player: ' + playerWins);
        console.log('Computer: ' + computerWins);
    }
}

// If the players score reaches five then a win message is displayed with a final scoreboard.
if (playerWins === 5) {
    console.log('You won!')
    console.log("Your final score is: " + playerWins);
    console.log("Computer's final score is: " + computerWins);
}

// If the computer wins then a lose message is displayed with a final scoreboard.
if (computerWins === 5) {
    console.log('You lost!');
    console.log("Your final score is: " + playerWins);
    console.log("Computer's final score is: " + computerWins);
}
















// -------------------------------------


// OLD CODE! / USED FOR SELF-REFLECTION!

// let playerPrompt = prompt("Choose either rock, paper or scissors:");

// // Defines an empty variable for use in playerInput
// let playerSelection;

// function playerInput() {

//     // Turns player prompt to lowercase
//     let lowerPrompt = playerPrompt.toLowerCase();
//     if (lowerPrompt == 'rock') {
//         playerSelection = 1;
//     } else if (lowerPrompt == 'paper') {
//         playerSelection = 2;
//     } else if (lowerPrompt == 'scissors') {
//         playerSelection = 3;
//     } else  {
//         console.log('Invalid option');
//     }
//     return playerSelection;
// }

// console.log(playerInput());

// // Defines an empty variable for use in getComputerChoice
// let computerSelection;
// function getComputerChoice() {

//     // Creates a choice array that getComputerChoice picks from
//     let choiceArray = ["rock", "paper", "scissors"];

//     // Math.floor rounds down all numbers to nearest whole.
//     // Math.random generates a number between 0 and 1 that isn't a whole number.
//     // This is all multiplied by the array length which allows the randomChoice variable to pick random num.
//     let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
//     if (randomChoice == 'rock') {
//         computerSelection = 1;
//     } else if (randomChoice == 'paper') {
//         computerSelection = 2;
//     } else if (randomChoice == 'scissors') {
//         computerSelection = 3;
//     }
//     return computerSelection;
// }

// console.log(getComputerChoice());

// // gameRound function takes the playerSelection and computerSelection parameters.
// // These parameters are equal to the choice the player made & computer made as they're returned in their funcs.
// function gameRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection) {
//         return 'Draw!';
//     } else if (playerSelection === 1 && computerSelection === 2) {
//         return 'Lose!';
//     } else if (playerSelection === 1 && computerSelection === 3) {
//         return 'Win!';
//     } else if (playerSelection === 2 && computerSelection === 1) {
//         return 'Win!';
//     } else if (playerSelection === 2 && computerSelection === 3) {
//         return 'Lose!';
//     } else if (playerSelection === 3 && computerSelection === 1) {
//         return 'Lose!';
//     } else if (playerSelection === 3 && computerSelection === 2) {
//         return 'Win!';
//     }
// }

// console.log(gameRound(playerSelection, computerSelection));

// // Invokes two new global scope variables, value of 0. Used in the scoreTally fuction.
// let playerScore = 0;
// let computerScore = 0;

// function scoreTally() {
//     // Invoke new variable, equal to the results of the playerSelection & computerSelection from gameRound func.
//     let result = gameRound(playerSelection, computerSelection);
//     // If the player has won, add 1 point to playerScore variable and returns the playerScore.
//     if (result === 'Win!') {
//         playerScore++;
//         return playerScore;
//     // If the player loses, add 1 point to computerScore and returns the computerScore.
//     } else if (result === 'Lose!') {
//         computerScore++;
//         return computerScore;
//     }
// }

// scoreTally(playerSelection, computerSelection)

// console.log("Your score: " + playerScore);
// console.log("Computer score: " + computerScore);

// while (playerScore < 5 && computerScore < 5) {
// }