



function playGame() {
let humanScore = 0;
let computerScore = 0;
let round = 0;

const container = document.querySelector("#container");

let roundCounter = document.createElement("div");
roundCounter.classList.add("roundCounter");
roundCounter.textContent = "Round " + round; 
container.appendChild(roundCounter);





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




function playRound (humanChoice, computerChoice) {
    console.log("Human Choice:", humanChoice); // For debugging purposes
    console.log("Computer Choice:", computerChoice); // For debugging purposes

    let results = document.querySelector(".results");
    if (!results) {
        results = document.createElement("div");
        results.classList.add("results");
        container.appendChild(results);
    }

    if (humanChoice === computerChoice) {
       
        
        results.textContent = "It's a tie! Go Again";
        
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
               (humanChoice === "paper" && computerChoice === "rock") || 
               (humanChoice === "scissors" && computerChoice === "paper")) {
                
                
                results.textContent = "You Win! " + humanChoice + " beats " + computerChoice + ".";
               
                humanScore++;
    } else {
                
                
                results.textContent = "You Lose! " + computerChoice + " beats " + humanChoice + ".";
                
                computerScore++; 
    }

    container.appendChild(results);

    // Output the scores after the round
    let myScore = document.querySelector(".myScore")
    let pcSCore = document.querySelector(".pcScore")

    if (!myScore) {

    myScore = document.createElement("div");
    myScore.classList.add("myScore");
    container.appendChild(myScore);
    }
    myScore.textContent = "Human Score: " + humanScore;
    
    if (!pcSCore) {
    pcScore = document.createElement("div");
    pcScore.classList.add("pcScore");
    container.appendChild(pcScore);
    }
    pcScore.textContent = "Computer Score: " + computerScore;

};
 
// call playround function
 // repeat 5 times
 // count rounds 
 function rounds() {
    round++
    roundCounter.textContent = "Round " + round;
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

round++
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



