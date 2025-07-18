/* -----Pseudo-code----- */

/* --------Step-1-------- */
// Make a function "getComputerChoice"
// Declare a variable named "randomValue"
// Assign "Math.random" function to randomValue variable 
// Multiply Math.random function by 3 to scale range from 0 to 3(exclusive)
// Wrap Math.random function inside "Math.floor" function to round to nearest whole number
// Write a conditon inside "getComputerChoice" function
// Using switch-statements we will check for each case 
// For each random value(0,1,2) assign 0 , 1 and 2 to each individual case
// Depending on the case we will return one of the "rock, paper and scissor" values

/* --------Step-2-------- */
// Make a function "getHumanChoice"
// Declare a variable named "userChoice"
// Prompt user to enter either of one value : 'rock', 'paper', 'scissor'
// Store this prompt in 'userChoice' variable use 'var'
// use var to reassign userChoice variable with its lowercase value using "toLowerCase()" function
// Write conditional statements using switch-statements
// Check for each case and return the value as rock, paper or scissor) accordingly
// If user enters an invalid value then the default case returns tie

/* --------Step-3-------- */
// Create a variable named humanScore and initialize it with 0
// Create a variable named computerScore and initialize it with 0

/* --------Step-4-------- */
// Make a function "playRound"
// This function takes 2 parameters 1) humanChoice 2) computerChoice
// Declare two variables humanChoice and computerChoice
// Assign getHumanChoice function to humanChoice variable to store return value of getHumanChoice function in this variable
// Assign getComputerChoice function to computerChoice variale to store returun value of getComputerChoice function in this variable
// Pass variables humanChoice and computerChoice as arguments for parameters humanChoice and computerChoice respectively of playRound function
// Use conditional statement if-else to identify the winner
// If human wins increment humanScore variable and if computer wins increment computerScore variable
// If the match is tied nobody gets point
// Log who won and who lost and score into the console
// If humanChoice is equal to rock and computerChoice is equal to paper then human wins
// Else-if humanChoice is equal to paper and ComputerChoice is equal to rock then human wins
// Else-if humanChoice is equal to scissor and computerChoice is equal paper then human wins
// Else-if computerChoice is rock and humanChoice is paper then computer wins
// Else-if computerChoice is paper and humanChoice is rock then computer wins
// Else-if computerChoice  is scissors and humanChoice is paper then computer wins
// Else the match is tied
function getComputerChoice() {
    const randomValue = Math.floor( Math.random() * 3 );
    
    switch (randomValue) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor';
            break;
    }
}

function getHumanChoice() {
    var userChoice = prompt('Heya visitor ! Wanna play a Janken-pon(rock-paper-scissors) game ? Enter one of the "rock", "paper" or "scissor" values , If you enter any other value aside from these the round will result in a tie. To see results open "dev-tools console". Good luck !'); 
    var userChoice = userChoice.toLowerCase();

    switch (userChoice) {
        case 'rock':
            return 'rock';
            break;
        case 'paper':
            return 'paper';
            break;
        case 'scissor' || 'scissors':
            return 'scissor';
            break;
        default:
            return 'tie'
    }
}
console.log( getHumanChoice() );
let humanScore = 0;
let computerScore = 0;