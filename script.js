function getComputerChoice() {
    a = Math.floor(Math.random() * 10);
    if (a <= 3) {
        return "Rock";
    }
    else if (a <= 7) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

console.log(getComputerChoice());