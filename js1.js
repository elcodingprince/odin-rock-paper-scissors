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
console.log(getComputerChoice());