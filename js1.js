

/* a function named getComputerChoice that 
randomly returnes 'rock', 'paper', or 'scissors' 

if number is less than or equal to 0.33 return 'rock'
else if number is greater than 0.33 and less than or equal to  0.66 return 'paper'
else if number is greater then 0.66 return 'scissors' */

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        return 'rock';
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

// function called getHumanChoice that returns 
// one of the valid humansinput 

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?");
    // Convert input to lowercase to make the check case-insensitive
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice; 
    } else {
        alert("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.")
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    console.log("Human Choice:", humanChoice); // For debugging purposes
    console.log("Computer Choice:", computerChoice); // For debugging purposes
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Go Again"); {
            return humanChoice;
        }
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
               (humanChoice === "paper" && computerChoice === "rock") || 
               (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You Win! " + humanChoice + " beats " + computerChoice + ".")
        humanScore++;
    } else {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice + ".")
        computerScore++; 
    }
    // Output the scores after the round
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}
 
// call playround function
 // repeat 5 times
 // count rounds 
 let round = 0;
function playGame() {
    round++
    console.log("Round " + round)
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
playGame();
playGame();
playGame();
playGame();
playGame();

function winner(){
    if (humanScore > computerScore) {
        console.log("You WIn!")
    } else {
        console.log("You Lose!")
    }
}
winner();
