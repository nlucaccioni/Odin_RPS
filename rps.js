//console.log('Hello World');

/*
Create function called GetComputerChoice
    Generate a random number between 0 and 1
    If number is less than .33, return rock
    If number is between .33 and .66, return paper
    If number is greater than .66, return scissors

Create function called getHumanChoice
    Prompt user for input
    Set user's input to lowercase or make sure the comparisons are case insensitive
    If input is rock, return rock
    If input is paper, return paper
    If input is scissors, return paper
    Else, show user message 'Please choose rock, paper, or scissors.'

Create variable called humanScore initialized at 0
Create variable called computerScore initialized at 0

Create function called playRound with parameters humanChoice and computerChoice
*/

console.log('START');

function getComputerChoice() {
    let num = Math.random();

    if (num <= 0.33) {
        return 'rock';
    } else if (num <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//console.log(getComputerChoice());

function getHumanChoice() {
    let input = prompt('Rock, paper, or scissors?');
    let choice = input.toLowerCase();
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors' ) {
        return choice
    } else {
        alert('Invalid input');
        return getHumanChoice();
    }
}

//console.log(getHumanChoice());


function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == 'rock' && computerChoice == 'scissors') {
            console.log('You win! Rock beats scissors.');
            humanScore++;
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            console.log('You win! Scissors beats paper.');
            humanScore++;
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            console.log('You win! Paper beats rock.');
            humanScore++;
        } else if (humanChoice == 'rock' && computerChoice == 'paper') {
            console.log('You lose! Paper beats rock.');
            computerScore++;
        } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            console.log('You lose! Rock beats scissors');
            computerScore++;
        } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            console.log('You lose! Scissors beats paper.');
            computerScore++;
        } else {
            console.log("It's a tie!");
        }

        console.log(`It's ${humanScore} to ${computerScore}`);
    }


    console.log('Round 1');
    playRound(getHumanChoice(), getComputerChoice());
    console.log('Round 2');
    playRound(getHumanChoice(), getComputerChoice());
    console.log('Round 3');
    playRound(getHumanChoice(), getComputerChoice());
    console.log('Round 4');
    playRound(getHumanChoice(), getComputerChoice());
    console.log('Round 5');
    playRound(getHumanChoice(), getComputerChoice());
}

playGame();

console.log('END');