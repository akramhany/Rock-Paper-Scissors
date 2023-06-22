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

//takes the winner and change the page to write the winner
function displayWinner(winner) {
    const mainPage = document.querySelector('.secondPage');
    const winnerDisplayer = document.querySelector('.thirdPage');
    const theWinner = document.createElement('p');

    mainPage.style.display = "none";

    theWinner.style.cssText = "display: flex;  justify-content: center;  align-items: center;  font-family: Lacquer;  font-size: 70px;"

    if (winner.toLowerCase() === "player")
    {
        theWinner.textContent = "Player Wooooon!";
    }
    else
    {
        theWinner.textContent = "Computer Won :(";
    }
    winnerDisplayer.appendChild(theWinner);
}

//the main function of the game
function game() {

    let playerScore = 0;
    let computerScore = 0;

    const displayedPlayerScore = document.querySelector(".playerScore");
    const displayedComputerScore = document.querySelector(".computerScore");

    displayedPlayerScore.textContent = playerScore;
    displayedComputerScore.textContent = computerScore;

    //loop over the buttons and check if any of them is clicked
    const buttons = document.querySelectorAll(".buttons");
    buttons.forEach((button) => {

        button.addEventListener('click', () => {

            let winner = playRound(button.className, getComputerChoice());

            if (winner === "Player")    playerScore++;
            else if (winner === "Computer")    computerScore++; 

            if (playerScore === 5)
                displayWinner("player");
            else if (computerScore === 5)
                displayWinner("computer");

            displayedPlayerScore.textContent = playerScore;
            displayedComputerScore.textContent = computerScore;
        })

    })
    
}

function startPlayingIndicator() {

    const startGame = document.querySelector(".startGameButton");
    startGame.addEventListener('click', () => {
    const firstPage = document.querySelector(".firstPage");
    const secondPage = document.querySelector(".secondPage");
    
    firstPage.style.display = 'none';
    secondPage.style.display = 'inline';

})
}


startPlayingIndicator();
game();
