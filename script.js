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
    
    while (playerSelection != 'rock' && playerSelection != "paper" && playerSelection != "scissors")
    {
        playerSelection = prompt("Rock, Paper, or Scissors?")
        playerSelection = playerSelection.toLowerCase()
    }


    if (playerSelection === "rock")
    {
        if (computerSelection === "Rock")
        {
            return "Draw!"
        }
        else if (computerSelection === "Paper")
        {
            computerScore+= 1
            return "You lose! Paper beats rock"
        }
        else
        {
            playerScore+= 1
            return "You win! Rock beats scissors"
        }
    }

    else if (playerSelection === "paper")
    {
        if (computerSelection === "Rock")
        {
            playerScore+= 1
            return "You win! Paper beats rock"
        }
        else if (computerSelection === "Paper")
        {
            return "Draw!"
        }
        else
        {
            computerScore+= 1
            return "You lose! Scissors beats paper"
        }
    }

    else
    {
        if (computerSelection === "Rock")
        {
            computerScore+= 1
            return "You lose! Rock beats scissors"
        }
        else if (computerSelection === "Paper")
        {
            playerScore+= 1
            return "You win! Scissors beats paper"
        }
        else
        {
            return "Draw!"
        }
    }



}

function game(){

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