



function playGame() {
let humanScore = 0;
let computerScore = 0;
let round = 0;


// a function named getComputerChoice that 
// randomly returnes 'rock', 'paper', or 'scissors' 
// if number is less than or equal to 0.33 return 'rock'
// else if number is greater than 0.33 and less than or equal to  0.66 return 'paper'
// else if number is greater then 0.66 return 'scissors' */

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

/*

user can now pick their choice with button 

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
    */ 

const container = document.querySelector("#container");


function playRound (humanChoice, computerChoice) {
    console.log("Human Choice:", humanChoice); // For debugging purposes
    console.log("Computer Choice:", computerChoice); // For debugging purposes
    let results = document.createElement("div");

    if (humanChoice === computerChoice) {
       
        results.classList.add("results");
        results.textContent = "It's a tie! Go Again";
        
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
               (humanChoice === "paper" && computerChoice === "rock") || 
               (humanChoice === "scissors" && computerChoice === "paper")) {
                
                results.classList.add("results");
                results.textContent = "You Win! " + humanChoice + " beats " + computerChoice + ".";
               
                humanScore++;
    } else {
                
                results.classList.add("results");
                results.textContent = "You Lose! " + computerChoice + " beats " + humanChoice + ".";
                
                computerScore++; 
    }

    container.appendChild(results);

    // Output the scores after the round
    let myScore = document.createElement("div");
    let pcScore = document.createElement("div");

    myScore.classList.add("myScore");
    myScore.textContent = "Human Score: " + humanScore;

    pcScore.classList.add("pcScore");
    pcScore.textContent = "Computer Score: " + computerScore;

    container.appendChild(myScore);
    container.appendChild(pcScore);
}
 
// call playround function
 // repeat 5 times
 // count rounds 
 function rounds() {
    round++
    console.log("Round " + round)
    }

    let humanSelection = '';
    let computerSelection = getComputerChoice();

/*
    rounds();
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    rounds();
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    rounds();
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    rounds();
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

*/ 

let playerSelections = document.querySelector("#humanSelections");

playerSelections.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'rock':
            console.log('rock was clicked');
            rounds();
            humanSelection = 'rock';
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            break;
        case 'paper':
            console.log('paper was clicked');
            rounds();
            humanSelection = 'paper';
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            break;
        case 'scissors': 
            console.log('scissors was clicked');
            rounds();
            humanSelection = 'scissors';
            computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        break;
    }

});
 /* add winner declaration and final score back in once you learn how to implement them in your new code 
// decalres a winner 
function winner(){
    if (humanScore === computerScore) {
        console.log("Its a Tie!")
    } else if (humanScore > computerScore) {
        console.log("You WIn!")
    } else {
        console.log("You Lose!")
    }
    }
    winner()
// provides final score
    function finalScore() {
        console.log("Final score: " + humanScore + " | " + computerScore)
    }

    finalScore()
*/

}


playGame();



