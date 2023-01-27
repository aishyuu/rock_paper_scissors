function getComputerChoice(){
    decision = ['rock', 'paper', 'scissors']
    return(decision[Math.floor(Math.random()*3)])
}

function getPlayerChoice() {
    let lock = true;
    while(lock) {
        let choice = prompt("Enter choice ('rock', 'paper', 'scissors'): ");
        if (choice.toLowerCase() === 'rock' || choice.toLowerCase() === 'paper' || choice.toLowerCase() === 'scissors') {
            return choice.toLowerCase();
        } else {
            console.log("You did not write in one of the correct options!");
        }
    }
}

function findWinner(computer, player) {
    // 1 == Computer win
    // 0 == Player win
    // 2 == Tie (give both a point)

    console.log(`Computer: ${computer}`);
    console.log(`Player: ${player}`)

    if(player === computer) {
        return (2);
    }
    switch (player) {
        case 'rock':
            if(computer == 'paper') {
                return(1);
            }
            return (0);
        case 'paper':
            if(computer == 'scissors') {
                return (1);
            }
            return (0);
        case 'scissors':
            if(computer == 'rock') {
                return (1);
            }
            return(0);
    }
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    return(findWinner(computerChoice, playerChoice));
}

function playGame() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        roundWinner = playRound(computerScore, playerScore);

        switch(roundWinner) {
            case 0:
                console.log("Player wins!")
                playerScore++;
                break;
            case 1:
                console.log("Computer wins!")
                computerScore++;
                break;
            case 2:
                console.log("Tie!")
                computerScore++;
                playerScore++;
                break;
        }

        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`)
    }

    if(computerScore > playerScore) {
        console.log("Computer wins!");
    } else if(playerScore > computerScore) {
        console.log("Player wins!");
    } else {
        console.log("Bro how does this even happen?")
    }
}