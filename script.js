let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choiceNum = Math.floor((Math.random()) * 3) + 1;
    if (choiceNum == 1) {
        return 'rock';
    } else if (choiceNum == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    choice = prompt("Enter rock, paper, or scissors: ");
    return choice;
}

function playRound(humanChoice, compChoice) {
    if ((compChoice == 'rock' && humanChoice == 'scissors') || 
    (compChoice == 'scissors' && humanChoice == 'paper') ||
    (compChoice == 'paper' && humanChoice == 'rock')) {
        console.log("Computer wins the round")
        return computerScore ++;

    } else if ((compChoice == 'rock' && humanChoice == 'paper') || 
    (compChoice == 'paper' && humanChoice == 'scissors') ||
    (compChoice == 'scissors' && humanChoice == 'rock')) {
        console.log("You win the round")
        return humanScore ++;

    } else {
        console.log("It's a tie")
    };
}


function playGame() {
    let start = document.getElementById("start").addEventListener("keydown", null);

    for (i = 0; i < 5; i++) {
        console.log(`Round ${i+1}/5`)
        /*returns string*/
        let compChoice = getComputerChoice();
        console.log("Computer is ready...")

        let humChoice = getHumanChoice(); 
        playRound(humChoice, compChoice);
    }
    
    if (humanScore > computerScore) {
        console.log("You win")
    } else if (computerScore > humanScore) {
        console.log("You lose (the game)")
    } else {
        console.log("Something strange happened...")
    }
}

playGame();