function getComputerChoice(){
    n = Math.floor(Math.random() * 3)
    if (n === 0){
        return "Rock"
    }
    else if (n === 1){
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

let computer_score = 0;
let player_score = 0;

function playRound(playerSelection, computerSelection){

    computerSelection = getComputerChoice()
    playerSelection = "Rock";

    if (playerSelection === "Rock")
    {
        if (computerSelection === "Rock")
        {
            return "Draw!"
        }
        else if (computerSelection === "Paper")
        {
            computer_score+=computer_score
            return "You lose! Paper beats rock"
        }
        else
        {
            player_score+=player_score
            return "You win! Rock beats scissors"
        }
    }

    else if (playerSelection === "Paper")
    {
        if (computerSelection === "Rock")
        {
            player_score+=player_score
            return "You win! Paper beats rock"
        }
        else if (computerSelection === "Paper")
        {
            return "Draw!"
        }
        else
        {
            computer_score+=computer_score
            return "You lose! Scissors beats paper"
        }
    }

    else
    {
        if (computerSelection === "Rock")
        {
            computer_score+=computer_score
            return "You lose! Rock beats scissors"
        }
        else if (computerSelection === "Paper")
        {
            player_score+=player_score
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
    
    //THIS RESULTS IS WRONG. It's not displaying corectly
    if (computer_score>player_score)
    {
        console.log("Computer wins the game")
    }
    else if (player_score>computer_score)
    {
        console.log("Player wins the game")
    }
    else
    {
        console.log("The game is a draw")

    }
}