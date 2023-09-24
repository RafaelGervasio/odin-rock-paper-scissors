const Score1 = document.querySelector('.Score1')
const Score2 = document.querySelector('.Score2')
const results = document.querySelector('.results')
const score = document.querySelector('.score')


function getComputerChoice(){
    
    randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0){
        return "Rock"
    }
    else if (randomNumber === 1){
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection){

    // const message = document.createElement('p')
    computerSelection = getComputerChoice()

    if (playerSelection === "rock")
    {
        if (computerSelection === "Rock")
        {
            const message = document.createElement('p')
            message.textContent = "Draw!"
            results.appendChild(message)
            if (results.childElementCount > 1){
                results.removeChild(results.firstElementChild)
            } 

        }
        else if (computerSelection === "Paper")
        {
            computerScore+= 1
            const message = document.createElement('p')
            message.textContent = "You lose! Paper beats rock"
            results.appendChild(message)
            if (results.childElementCount > 1){
                results.removeChild(results.firstElementChild)
            }
            if (computerScore>4 || playerScore>4){
                message.textContent = "Game over. Computer wins."
                message.style.color = 'red'
            }
        }
        else
        {
            playerScore+= 1
            const message = document.createElement('p')
            message.textContent = "You win! Rock beats scissors"
            results.appendChild(message)
            if (results.childElementCount > 1){
                results.removeChild(results.firstElementChild)
            }
            if (computerScore>4 || playerScore>4){
                message.textContent = "Game over. You win!"
                message.style.color = 'green'
            }
        }
    }

    else if (playerSelection === "paper")
    {
        if (computerSelection === "Rock")
        {
            playerScore+= 1
            const message = document.createElement('p')
            message.textContent = "You win! Paper beats rock"
            results.appendChild(message)
            if (results.childElementCount > 1){
                results.removeChild(results.firstElementChild)
            }
            if (computerScore>4 || playerScore>4){
                message.textContent = "Game over. You win!"
                message.style.color = 'green'
            }
        }
        else if (computerSelection === "Paper")
        {
            const message = document.createElement('p')
            message.textContent = "Draw!"
            results.appendChild(message)
            if (results.childElementCount > 1){
                results.removeChild(results.firstElementChild)
            }
        }
        else
        {
            computerScore+= 1
            const message = document.createElement('p')
            message.textContent = "You lose! Scissors beats paper"
            results.appendChild(message)
            if (results.childElementCount > 1){
                results.removeChild(results.firstElementChild)
            }
            if (computerScore>4 || playerScore>4){
                message.textContent = "Game over. Computers wins."
                message.style.color = 'red'
            }
        }
    }

    else
    {
        if (computerSelection === "Rock")
        {
            computerScore+= 1
            const message = document.createElement('p')
            message.textContent = "You lose! Rock beats scissors"
            results.appendChild(message)
            if (results.childElementCount > 1){
                results.removeChild(results.firstElementChild)
            }
            if (computerScore>4 || playerScore>4){
                message.textContent = "Game over. Computers wins."
                message.style.color = 'red'
            }
        }
        else if (computerSelection === "Paper")
        {
            playerScore+= 1
            const message = document.createElement('p')
            message.textContent = "You win! Scissors beats paper"
            results.appendChild(message)
            if (results.childElementCount > 1){
                results.removeChild(results.firstElementChild)
            }
            if (computerScore>4 || playerScore>4){
                message.textContent = "Game over. You win!"
                message.style.color = 'green'
            }
            
        }
        else
        {
            const message = document.createElement('p')
            message.textContent = "Draw!"
            results.appendChild(message)
            if (results.childElementCount > 1){
                results.removeChild(results.firstElementChild)
            }
        }
    }

    const plScore = document.createElement('text')
    plScore.textContent = `${playerScore}`
    plScore.classList.add('pltxt')
    Score1.appendChild(plScore)

    const cpScore = document.createElement('text')
    cpScore.textContent = `${computerScore}`
    cpScore.classList.add('cptxt')
    Score2.appendChild(cpScore)

    if (Score1.childElementCount > 1){
        Score1.removeChild(Score1.firstElementChild)
    } 
    
    if (Score2.childElementCount > 1){
        Score2.removeChild(Score2.firstElementChild)
    }   

    if (computerScore>4 || playerScore>4){
        computerScore = 0
        playerScore = 0
        Score1.removeChild(plScore)
        Score2.removeChild(cpScore)
    }

}

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    playRound('rock')
})

const paper = document.querySelector('#paper')
paper.addEventListener('click', () =>{
    playRound('paper')
})

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () =>{
    playRound('scissors')
})
