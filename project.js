const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector ('.scissors');
const resultDiv = document.querySelector('.result')



let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function playRound (playerSelection, computerSelection) {
    console.log ("1 ", playerSelection, "2 ", computerSelection)
    if (
        (playerSelection === "rock" && computerSelection === "Rock") ||
        (playerSelection === "scissors" && computerSelection === "Scissors") ||
        (playerSelection === "paper" && computerSelection === "Paper")
    ){
        const p = document.createElement('p');
        p.innerText = "It was a tie!"
        resultDiv.appendChild(p)
    } else if (playerSelection == "rock" && computerSelection === "Paper") {
        computerScore++
        const p = document.createElement('p');
        p.innerText = "You lose! Paper beats Rock";
        resultDiv.appendChild(p)
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        computerScore++
        const p = document.createElement('p');
        p.innerText = "You lose! Scissors beats Paper";
        resultDiv.appendChild(p)
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        computerScore++
        const p = document.createElement('p');
        p.innerText = "You lose! Rock beats Scissors"
        resultDiv.appendChild(p)
    } else if (playerSelection == "rock" && computerSelection == "Scissors"){
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You win!"
        resultDiv.appendChild(p)
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You win!"
        resultDiv.appendChild(p)
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You win!"
        resultDiv.appendChild(p)
    }
    }

    rockBtn.addEventListener('click', () => {
       const computerSelection = getComputerChoice()
       const playerSelection = 'rock'
       playRound(playerSelection, computerSelection)
    })

    paperBtn.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'paper'
        playRound(playerSelection, computerSelection)
     })

     scissorsBtn.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'scissors'
        playRound(playerSelection, computerSelection)
     })
    

//     function game () {
//         for (let i = 0; i < 5; i++){
//         const playerSelection = prompt("Rock, Paper or Scissors").toLowerCase();
//         const computerSelection = getComputerChoice();
//         console.log('1 ', playRound(playerSelection, computerSelection))
//         }
//     if (playerScore > computerScore) {
//         return "Congrats, you won!"
//     } else if (playerScore < computerScore) {
//         return "What a pity, you lost!"
//     } else {
//         return "It was a draw"
//     }
// }


