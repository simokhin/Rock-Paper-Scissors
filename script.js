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

