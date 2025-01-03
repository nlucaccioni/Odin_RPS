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


let playerOption = document.querySelector("#options");
let input;

playerOption.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            input = 'rock';
            playRound();
            break;

        case 'paper':
            input = 'paper';
            playRound();
            break;

        case 'scissors':
            input = 'scissors';
            playRound();
            break;
    }
})


const result = document.querySelector("#result");
const score = document.querySelector("#score");
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    humanChoice = input;
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);


    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock beats scissors');
        result.textContent = "You win! Rock beats scissors";
        humanScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You win! Scissors beats paper');
        result.textContent = 'You win! Scissors beats paper';
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win! Paper beats rock');
        result.textContent = 'You win! Paper beats rock';
        humanScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose! Paper beats rock');
        result.textContent = 'You lose! Paper beats rock';
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You lose! Rock beats scissors');
        result.textContent ='You lose! Rock beats scissors';
        computerScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You lose! Scissors beats paper.');
        result.textContent = 'You lose! Scissors beats paper.';
        computerScore++;
    } else {
        console.log("It's a tie!");
        result.textContent = "It's a tie!";
    }

    console.log(`It's ${humanScore} to ${computerScore}`);
    score.textContent = `It's ${humanScore} to ${computerScore}`;

    announceWinner();
}

function announceWinner(){
    if (humanScore >= 5) {
        score.textContent += "\nThe Human Wins!";
    } else if (computerScore >= 5) {
        score.textContent += "\nThe Computer Wins!";
    }
}