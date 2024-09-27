const startGame = document.querySelector(".startGame");

let humanScore = 0;
let computerScore = 0;
let round = 1;
let results;

function playGame(event) {
    humanScore = 0;
    computerScore = 0;
    round = 1;

    const container = document.querySelector("#container");

    container.innerHTML = '';

    let roundCounter = document.createElement("div");
    roundCounter.classList.add("roundCounter");
    roundCounter.textContent = "Round " + round; 
    container.appendChild(roundCounter);

    results = document.createElement("div");
    results.classList.add("results");
    container.appendChild(results);

    updateScores(container);
    startGame.disabled = true;
}




// a function named getComputerChoice that 
// randomly returnes 'rock', 'paper', or 'scissors' 
// if number is less than or equal to 0.33 return 'rock'
// else if number is greater than 0.33 and less than or equal to  0.66 return 'paper'
// else if number is greater then 0.66 return 'scissors' */

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return 'rock';
    } else if (randomNumber <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
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
    const roundCounter = container.querySelector(".roundCounter")

    // Check if results div already exists 

    if (humanChoice === computerChoice) { 
        results.textContent = "It's a tie! You both chose " + computerChoice + ". " + "Go Again.";
        
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
               (humanChoice === "paper" && computerChoice === "rock") || 
               (humanChoice === "scissors" && computerChoice === "paper")
            ) {
                results.textContent = "You Win! " + humanChoice + " beats " + computerChoice + ".";
                humanScore++;
    } else {
                
                results.textContent = "You Lose! " + computerChoice + " beats " + humanChoice + "."; 
                computerScore++; 
    }
    

    updateScores(container); 

    if (humanScore === 5 || computerScore === 5) {
        declareWinner(results);
        startGame.disabled = false;
    } else {
        roundCounter.textContent = "Round " + (++round);
    }
};
    
function updateScores(container) {
    // Output the scores after the round
    let scoreContainer = document.querySelector(".scoreContainer");
    
    let myScoreContainer = document.querySelector(".myScoreContainer");
    let myScoreText = document.querySelector(".myScoreText");
    let myScore = document.querySelector(".myScore");

    let pcScoreContainer = document.querySelector(".pcScoreContainer");
    let pcScoreText = document.querySelector(".pcScoreText");
    let pcScore = document.querySelector(".pcScore");

    if (!scoreContainer) {
        scoreContainer = document.createElement("div");
        scoreContainer.classList.add("scoreContainer");
    }

    if (!myScoreContainer) {
        myScoreContainer = document.createElement("div");
        myScoreContainer.classList.add("myScoreContainer");
    }
    
    
    if (!myScoreText) {

        myScoreText = document.createElement("div");
        myScoreText.classList.add("myScoreText")
        myScoreContainer.appendChild(myScoreText);
        }
        myScoreText.textContent = "Human Score ";

    if (!myScore) {
    
        myScore = document.createElement("div");
        myScore.classList.add("myScore");
        myScoreContainer.appendChild(myScore);
        }
            
        myScore.textContent = humanScore;

    if (!pcScoreContainer) {
        pcScoreContainer = document.createElement("div");
        pcScoreContainer.classList.add("pcScoreContainer");
    }
    if (!pcScoreText) {
    
        pcScoreText = document.createElement("div");
        pcScoreText.classList.add("pcScoreText");
        pcScoreContainer.appendChild(pcScoreText)
        }
        pcScoreText.textContent = "Computer Score ";
        
    if (!pcScore) {
        pcScore = document.createElement("div");
        pcScore.classList.add("pcScore");
        pcScoreContainer.appendChild(pcScore);
        }
        pcScore.textContent = computerScore;

        scoreContainer.appendChild(myScoreContainer);
        scoreContainer.appendChild(pcScoreContainer);

        container.appendChild(scoreContainer);
};

function declareWinner(results) {
    if (humanScore > computerScore) {
        results.textContent += ` You Win the Game! (Final Score: ${humanScore} - ${computerScore})`;
    } else if (humanScore < computerScore) {
        results.textContent += ` You Lose the Game! (Final Score: ${humanScore} - ${computerScore})`;
    } else {
        results.textContent += ` It's a Tie! (Final Score: ${humanScore} - ${computerScore})`;
    }
}

 
// call playround function
 // repeat 5 times
 // count rounds 
 function rounds() {
    round++
    roundCounter.textContent = "Round " + round;
    }

    

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

    let humanSelection = '';
    let computerSelection = getComputerChoice();

    switch (target.id) {
        case 'rock':
            console.log('rock was clicked');
            humanSelection = 'rock';        
            break;
        case 'paper':
            console.log('paper was clicked');
            humanSelection = 'paper';  
            break;
        case 'scissors': 
            console.log('scissors was clicked');
            humanSelection = 'scissors';

        break;
    }
    if (humanSelection) {
        const container = document.querySelector("#container");
        playRound(humanSelection, computerSelection, container);
    }
});

startGame.addEventListener("click", playGame);



