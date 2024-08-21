console.log("Hello World!")

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

humanScore = 0;
computerScore = 0;

function playRound (humanChoice, computerChoice) {
    console.log("Human Choice:", humanChoice); // For debugging purposes
    console.log("Computer Choice:", computerChoice); // For debugging purposes
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
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
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
 
// call playround function
 // repeat 5 times
 //
function playGame() {
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    
}
playGame()