let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    a = Math.floor(Math.random() * 100);
    if (a <= 33) {
        return "rock";
    }
    else if (a <= 66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("What is your choice?").toLowerCase();
    if (choice === "rock") {
        return "rock";
    }
    else if (choice === "paper") {
        return "paper";
    }
    else if (choice === "scissors") {
        return "scissors";
    }
    else {
        return "Try again.";
    }
}

console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            ++humanScore;
            return console.log("You win.")
        }
        else if (computerChoice === "rock") {
            return console.log("Draw.")
        }
        else {
            ++computerScore;
            return console.log("You lost.")
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            ++computerChoice;
            return console.log("You lost.")
        }
        else if (computerChoice === "paper") {
            return console.log("Draw.")
        }
        else {
            ++humanScore;
            return console.log("You win.")
        }
    }
    else {
        if (computerChoice === "paper") {
            ++humanScore;
            return console.log("You win.")
        }
        else if (computerChoice === "scissors") {
            return console.log("Draw.")
        }
        else {
            ++computerChoice;
            return console.log("You lost.")
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    
}