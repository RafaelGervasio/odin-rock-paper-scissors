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


    computerSelection = getComputerChoice()

    if (playerSelection === "rock")
    {
        if (computerSelection === "Rock")
        {
            const message = document.createElement('p')
            message.textContent = "Draw!"
            results.appendChild(message)

        }
        else if (computerSelection === "Paper")
        {
            computerScore+= 1
            const message = document.createElement('p')
            message.textContent = "You lose! Paper beats rock"
            results.appendChild(message)
        }
        else
        {
            playerScore+= 1
            const message = document.createElement('p')
            message.textContent = "You win! Rock beats scissors"
            results.appendChild(message)
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
        }
        else if (computerSelection === "Paper")
        {
            const message = document.createElement('p')
            message.textContent = "Draw!"
            results.appendChild(message)
        }
        else
        {
            computerScore+= 1
            const message = document.createElement('p')
            message.textContent = "You lose! Scissors beats paper"
            results.appendChild(message)
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
        }
        else if (computerSelection === "Paper")
        {
            playerScore+= 1
            const message = document.createElement('p')
            message.textContent = "You win! Scissors beats paper"
            results.appendChild(message)
            
        }
        else
        {
            const message = document.createElement('p')
            message.textContent = "Draw!"
            results.appendChild(message)
        }
    }


    
    const displayScore = document.createElement('p')
    displayScore.textContent = `${playerScore}  -  ${computerScore}`
    score.appendChild(displayScore)

    if (score.childElementCount > 1){
        score.removeChild(score.firstElementChild)
    }    


}

function game(){

    //  Remove the play 5 rounds logic
    for (let i = 0; i<5; i++)
    {
        console.log(playRound())
    }
    
    if (playerScore>computerScore)
    {
        console.log("Computer wins the game")
    }
    else if (playerScore>computerScore)
    {
        console.log("Player wins the game")
    }
    else if (playerScore==computerScore)
    {
        console.log("The game is a draw")

    }
    computerScore = 0;
    playerScore = 0;
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
