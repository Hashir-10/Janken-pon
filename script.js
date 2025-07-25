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
// Log starting score into the console

/* --------Step-4-------- */
// Make a function "playRound"
// This function takes 2 parameters 1) humanChoice 2) computerChoice
// Declare two variables humanChoice and computerChoice
// Assign getHumanChoice function to humanChoice variable to store return value of getHumanChoice function in this variable
// Assign getComputerChoice function to computerChoice variale to store returun value of getComputerChoice function in this variable
// Pass variables humanChoice and computerChoice as arguments for parameters humanChoice and computerChoice respectively of playRound function
// Log initial score into the console
// Use conditional statement if-else to identify the winner
// If human wins increment humanScore variable and if computer wins increment computerScore variable
// If the match is tied nobody gets point
// Log who won and who lost and score into the console
// If humanChoice is equal to rock and computerChoice is equal to paper then human loses
// Else-if humanChoice is equal to paper and ComputerChoice is equal to rock then human wins
// Else-if humanChoice is equal to scissor and computerChoice is equal paper then human wins
// ELse-if humanChoice is rock and computerChoice is scissor then human wins
// Else-if computerChoice  is scissors and humanChoice is paper then computer wins
// Else-if computerCHoice is rock and humanChoice is scissors computer wins
// Else the match is tied

/* --------Step-5-------- */
// Make a function "startRound"
// Place humanChoice and computerChoice variable and playRound function-call inside it

/* --------Step-6-------- */
// Make a function "playGame"
// Create a for-loop inside that function
// the loop iterates five times calling startRound function for each iteration

/* --------Step-7-------- */
// Make a function "finalScore"
// Write a condition to evaulate final score
// If humanScore is greater than computerScore log human won
// Else-if computerScore is greater than computerScore log computer won
// Else log This match is a draw, no one won

/* --------Step-8-------- */
// Make a "startGame" function
// The function shall ask the user if he/she wants to play the game or not
// If the user enters yes then start the game ask if he/she wants to play again if so then restart the game if no then stop 
// Else-if user enters no then alert "Thanks for visiting , if you change your mind then refresh the page to play"
// Else alert wrong input refresh the page to re-enter

/* --------Step-9-------- */
// Finally call the startGame function to start the game

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

/* --------Step-1-------- */

function getComputerChoice() {
  const randomValue = Math.floor(Math.random() * 3);

  switch (randomValue) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
}

/* --------Step-2-------- */

function getHumanChoice() {
  var userChoice = prompt(
    'Enter one of the "rock", "paper" or "scissor" values , If you enter any other value aside from these the round will result in a tie. To see results open "dev-tools console". Good luck !'
  );
  var userChoice = userChoice.toLowerCase();

  switch (userChoice) {
    case "rock":
      return "rock";
      break;
    case "paper":
      return "paper";
      break;
    case "scissor":
      return "scissor";
      break;
    default:
      return "tie";
  }
}

/* --------Step-3-------- */

let humanScore = 0;
let computerScore = 0;
console.log(`*Starting score is = You: ${humanScore} | Computer: ${computerScore}*`);

/* --------Step-4-------- */

function playRound(humanChoice, computerChoice) {

    if (humanChoice == 'rock' && computerChoice == 'scissor'){
        humanScore++;
        console.log('--You Won !!');
        console.log(`Current score is = You: ${humanScore} | Computer: ${computerScore}`);
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        console.log('--You Won !!');
        console.log(`Current score is = You: ${humanScore} | Computer: ${computerScore}`);
    } else if (humanChoice == 'scissor' && computerChoice == 'paper') {
        humanScore++;
        console.log('--You Won !!');
        console.log(`Current score is = You: ${humanScore} | Computer: ${computerScore}`);
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        console.log('--Computer Won !!');
        console.log(`Current score is = You: ${humanScore} | Computer: ${computerScore}`);
    } else if (humanChoice == 'paper' && computerChoice == 'scissor') {
        computerScore++;
        console.log('--Computer Won !!');
        console.log(`Current score is = You: ${humanScore} | Computer: ${computerScore}`);
    } else if (humanChoice == 'scissor' && computerChoice == 'rock') {
        computerScore++;
        console.log('--Computer Won !!');
        console.log(`Current score is = You: ${humanScore} | Computer: ${computerScore}`);
    } else {
        console.log('This round resulted in a tie | No points for anyone.');
    }
}

/* --------Step-5-------- */

function startRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

/* --------Step-6-------- */

function playGame() {
    for (i = 0; i < 5; i++) {
        startRound();
    }
}

/* --------Step-7-------- */

function finalScore() {
    
    if (humanScore > computerScore) {
        console.log(`You won by "${humanScore}" points. You are a very smart cat !`);
    } else if (humanScore < computerScore) {
        console.log(`Computer won by "${computerScore}" points. Is it true that ai will take over the world ?`)
    } else {
        console.log('The match resulted in a draw. Try again !');
    }
}
/* --------Step-8-------- */

function startGame() {
    var askToPlay = prompt('Heya visitor ! Wanna play a Janken-pon(rock-paper-scissors) game ? If so then enter "yes" below to start the game and if you are not in the mood enter "no". Good-luck !');
    var askToPlay = askToPlay.toLowerCase();

    console.log('~| RESULT OF THE GAME |~');

    if (askToPlay == 'yes'){
        playGame();
        finalScore();
        var askToPlayAgain = prompt('Hey again ! Wanna play the again ? If so then enter "yes" below to re-start the game and enter "no" if you dont want to play more. Good-luck again !');
        var askToPlayAgain = askToPlayAgain.toLowerCase();
        
        switch (askToPlayAgain) {
            case 'yes':
                playGame();
                finalScore();
                alert('Thank-you for giving this a try')
                break;
            case 'no':
                alert('Bye fella thanks for playing !');
                break;
            default:
                alert('Invalid input, Enter either of "yes" or "no" only');
        }
    } else if (askToPlay == 'no') {
        alert('Thank you so much for visiting ! If you change your mind and want to give this a try refresh the page. Otherwise have a nice day !');
    } else {
        alert('Invalid input, Enter either of "yes" or "no" only !');
    }
}

/* --------Step-9-------- */

startGame();