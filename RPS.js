function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0)
        return "Rock";
    else if (randomNum == 1)
        return "Paper";
    else
        return "Scissors";
}

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

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Choose something: ");
        let computerChoice = getComputerChoice();
        
        let theWinner = playRound(playerSelection, computerChoice).toLowerCase();
        if (theWinner == "player")
            playerScore++;
        else if (theWinner == "computer")
            computerScore++;
    }

    if (playerScore > computerScore)
        console.log("Player Won YeeeeeeeeeeeeeY");
    else if (computerScore > playerScore)
        console.log("Computer Won (Loser -_-)");
    else
        console.log("Tie");
    
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
}

game();