let humanScore = 0;
let computerScore = 0;
let rounds = 1;

let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");
let score = document.querySelector("#score");
let results = document.querySelector(".results")
let result = document.querySelector("#result");
let whichRound = document.querySelector("#which-round");

btnRock.addEventListener("click", () => {
    humanSelect = "Rock";
    computerSelect = getComputerChoice(); 
    playRound(humanSelect, computerSelect);
    score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    whichRound.textContent = `Round: ${rounds}`;
    rounds = rounds + 1;
    stopGame();
});

btnPaper.addEventListener("click", () => {
    humanSelect = "Paper";
    computerSelect = getComputerChoice(); 
    playRound(humanSelect, computerSelect);
    score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    whichRound.textContent = `Round: ${rounds}`;
    rounds = rounds + 1;
    stopGame();
});

btnScissors.addEventListener("click", () => {
    humanSelect = "Scissors";
    computerSelect = getComputerChoice(); 
    playRound(humanSelect, computerSelect);
    score.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    whichRound.textContent = `Round: ${rounds}`;
    rounds = rounds + 1;
    stopGame();
});

function getComputerChoice() {
    number = Math.random();
    if (number <= 0.33) {
        return "rock";
    }
    else if (number <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let roundResult = document.querySelector("#round-result");
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore = humanScore + 1;
            roundResult.textContent = "You win. (Ты победил в этом раунде)";
            return console.log("You win. (Ты победил в этом раунде)");
        }
        else if (computerChoice === "rock") {
            roundResult.textContent = "Draw. (Ничья в этом раунде)";
            return console.log("Draw. (Ничья в этом раунде)");
        }
        else {
            computerScore = computerScore + 1;
            roundResult.textContent = "You lost. (Ты проиграл в этом раунде)";
            return console.log("You lost. (Ты проиграл в этом раунде)");
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore = computerScore + 1;
            roundResult.textContent = "You lost. (Ты проиграл в этом раунде)";
            return console.log("You lost. (Ты проиграл в этом раунде)");
        }
        else if (computerChoice === "paper") {
            roundResult.textContent = "Draw. (Ничья в этом раунде)";
            return console.log("Draw. (Ничья в этом раунде)");
        }
        else {
            humanScore = humanScore + 1;
            roundResult.textContent = "You win. (Ты победил в этом раунде)";
            return console.log("You win. (Ты победил в этом раунде)");
        }
    }
    else {
        if (computerChoice === "paper") {
            humanScore = humanScore + 1;
            roundResult.textContent = "You win. (Ты победил в этом раунде)";
            return console.log("You win. (Ты победил в этом раунде)");
        }
        else if (computerChoice === "scissors") {
            roundResult.textContent = "Draw. (Ничья в этом раунде)";
            return console.log("Draw. (Ничья в этом раунде)");
        }
        else {
            computerScore = computerScore + 1;
            roundResult.textContent = "You lost. (Ты проиграл в этом раунде)";
            return console.log("You lost. (Ты проиграл в этом раунде)");
        }
    }
}

function stopGame(){
    if ((humanScore >= 5 && computerScore < 5) || (humanScore < 5 && computerScore >= 5)) {
        if (humanScore > computerScore) {
            result.textContent = "You win the game! (Ты победил!)"
            return console.log("You win the game! (Ты победил!)");
        }
        else if (computerScore > humanScore) {
            result.textContent = "You lost the game. (Ты проиграл игру...)"
            return console.log("You lost the game. (Ты проиграл игру...)");
        }
        else {
            result.textContent = "The game ended in a draw. (Игра закончилась ничьей)"
            return console.log("The game ended in a draw. (Игра закончилась ничьей)")
        }
    }
}
