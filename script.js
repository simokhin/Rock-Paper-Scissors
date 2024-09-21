let humanScore = 0;
let computerScore = 0;

let humanSelect = getHumanChoice();
let computerSelect = getComputerChoice(); 

function playGame() {
    playRound
}

function playGame() {
    if (humanScore >= 5 && computerScore < 5){
        return console.log("You win the game");
    }
    else if (computerScore >= 5 && humanScore < 5){
        return console.log("You lost the game.")
    }
    else {
        let round = playRound(humanSelect, computerSelect);
            if (round === "You win.") {
                humanScore = humanScore + 1;
                return console.log(humanScore, computerScore)
            }
            else if (round === "You lost.") {
                computerScore = computerScore +1;
                return console.log(humanScore, computerScore);
            }
            else {
                return console.log(humanScore, computerScore);
            }
    }
}

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
    else if (choice === none) {
        return "Try again.";
    }
    else {
        return "Try again.";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore = humanScore + 1;
            return console.log("You win.")
        }
        else if (computerChoice === "rock") {
            return console.log("Draw.")
        }
        else {
            computerScore = computerScore + 1;
            return console.log("You lost.")
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore = computerScore + 1;
            return console.log("You lost.")
        }
        else if (computerChoice === "paper") {
            return console.log("Draw.")
        }
        else {
            humanScore = humanScore + 1;
            return console.log("You win.")
        }
    }
    else {
        if (computerChoice === "paper") {
            humanScore = humanScore + 1;
            return console.log("You win.")
        }
        else if (computerChoice === "scissors") {
            return console.log("Draw.")
        }
        else {
            computerScore = computerScore + 1;
            return console.log("You lost.")
        }
    }
}