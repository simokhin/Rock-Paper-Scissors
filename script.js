let humanScore = 0;
let computerScore = 0;

let humanSelect = getHumanChoice();
let computerSelect = getComputerChoice(); 

playGame();

function playGame() {
    playRound(humanSelect, computerSelect);

    humanSelect = getHumanChoice();
    computerSelect = getComputerChoice(); 
    playRound(humanSelect, computerSelect);

    humanSelect = getHumanChoice();
    computerSelect = getComputerChoice(); 
    playRound(humanSelect, computerSelect);

    humanSelect = getHumanChoice();
    computerSelect = getComputerChoice(); 
    playRound(humanSelect, computerSelect);

    humanSelect = getHumanChoice();
    computerSelect = getComputerChoice(); 
    playRound(humanSelect, computerSelect);

    if (humanScore > computerScore) {
        return console.log("You win the game! (Ты победил!)");
    }
    else if (computerScore > humanScore) {
        return console.log("You lost the game. (Ты проиграл игру...)");
    }
    else {
        return console.log("The game ended in a draw. (Игра закончилась ничьей)")
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
    let choice = prompt("What is your choice? (Rock, Paper, Scissors) (Выбирай: камень, ножницы или бумага)").toLowerCase();
    if (choice === "rock" || choice === "камень") {
        return "rock";
    }
    else if (choice === "paper" || choice === "бумага") {
        return "paper";
    }
    else if (choice === "scissors" || choice === "ножницы") {
        return "scissors";
    }
    else if (choice === none) {
        return "Try again. (Попробуй ещё раз)";
    }
    else {
        return "Try again. (Попробуй ещё раз)";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore = humanScore + 1;
            return console.log("You win. (Ты победил в этом раунде)")
        }
        else if (computerChoice === "rock") {
            return console.log("Draw. (Ничья в этом раунде)")
        }
        else {
            computerScore = computerScore + 1;
            return console.log("You lost. (Ты проиграл в этом раунде)")
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore = computerScore + 1;
            return console.log("You lost. (Ты проиграл в этом раунде)")
        }
        else if (computerChoice === "paper") {
            return console.log("Draw. (Ничья в этом раунде)")
        }
        else {
            humanScore = humanScore + 1;
            return console.log("You win. (Ты победил в этом раунде)")
        }
    }
    else {
        if (computerChoice === "paper") {
            humanScore = humanScore + 1;
            return console.log("You win. (Ты победил в этом раунде)")
        }
        else if (computerChoice === "scissors") {
            return console.log("Draw. (Ничья в этом раунде)")
        }
        else {
            computerScore = computerScore + 1;
            return console.log("You lost. (Ты проиграл в этом раунде)")
        }
    }
}