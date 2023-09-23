let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * 3);
    return choice[random];
}

function playRound (playerSelection, computerSelection) {
    console.log ("1 ", playerSelection, "2 ", computerSelection)
    if (playerSelection == "rock" && computerSelection == "Rock") {
        return "Tie"
    } else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return "Tie"
    } else if (playerSelection == "paper" && computerSelection == "Paper") {
        return "Tie"
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        computerScore++
        return "You lose! Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        computerScore++
        return "You lose! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        computerScore++
        return "You lose! Rock beats Scissors"
    } else if (playerSelection == "rock" && computerSelection == "Scissors"){
        playerScore++
        return "You win!"
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore++
        return "You win!"
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        playerScore++
        return "You win!"
    }
    }




    function game () {
    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log('1 ', playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        return "Congrats, you won!"
    } else if (playerScore < computerScore) {
        return "What a pity, you lost!"
    } else {
        return "It was a draw"
    }
}



console.log(game())