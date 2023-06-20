//returns a random choice of Rock, Paper and Scissors
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0)
        return "Rock";
    else if (randomNum == 1)
        return "Paper";
    else
        return "Scissors";
}

//It takes two arguments, the player selection and the computer selection then it determine who wins 
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let theWinner;

    if (playerSelection == computerSelection)
        theWinner = "No One";
    else if (playerSelection == "rock")
    {
        if (computerSelection == "scissors")
            theWinner = "Player";
        else
            theWinner = "Computer";
    }
    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock")
            theWinner = "Player";
        else
            theWinner = "Computer";
    }
    else 
    {
        if (computerSelection == "rock")
            theWinner = "Computer";
        else
            theWinner = "Player";
    }

    return theWinner;
}

//the main function of the game
function game() {

    let playerScore = 0;
    let computerScore = 0;

    

    //compare the scores of the player and the computer to determine who won
    if (playerScore === 5)
        console.log("Player Won YeeeeeeeeeeeeeY");
    else if (computerScore === 5)
        console.log("Computer Won (Loser -_-)");
    else
        console.log("Tie");
    
}

game();

//
//