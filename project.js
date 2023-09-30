const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector ('.scissors');
const resultDiv = document.querySelector('.result');
const playScoreSpan = document.querySelector('.player-score');
const compScoreSpan = document.querySelector('.computer-score');




let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

function playRound (playerSelection, computerSelection) {
    
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

    function checkForWinner () {
        if (playerScore === 5) {
            const h2 = document.createElement('h2')
            h2.classList.add('player-won')
            h2.innerText = `You won ${playerScore} to ${computerScore}! Congrats!`
            resultDiv.appendChild(h2)
        } else if (computerScore === 5) {
            const h2 = document.createElement('h2')
            h2.classList.add('computer-won')
            h2.innerText = `You lost ${playerScore} to ${computerScore}! Better luck next time!`
            resultDiv.appendChild(h2)
        }
    }

function updateScore(playerScore, computerScore) {
    playScoreSpan.innerText = `Player Score: ${playerScore}`
    compScoreSpan.innerText = `Computer Score: ${computerScore}`
}

    rockBtn.addEventListener('click', () => {
       const computerSelection = getComputerChoice()
       const playerSelection = 'rock'
       playRound(playerSelection, computerSelection)
       updateScore(playerScore, computerScore)
       checkForWinner (playerScore, computerScore)
    })

    paperBtn.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'paper'
        playRound(playerSelection, computerSelection)
        updateScore(playerScore, computerScore)
        checkForWinner (playerScore, computerScore)
     })

     scissorsBtn.addEventListener('click', () => {
        const computerSelection = getComputerChoice()
        const playerSelection = 'scissors'
        playRound(playerSelection, computerSelection)
        updateScore(playerScore, computerScore)
        checkForWinner (playerScore, computerScore)
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


