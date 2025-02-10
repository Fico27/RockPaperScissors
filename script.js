function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "rock"
    } else if (computerChoice === 2) {
        return "paper"
    } else {
        return "scissors"
    }

}

function getHumanChoice() {
    let rawHumanChoice = prompt("Please select Rock, Paper, or Scissors!")
    let humanChoice = rawHumanChoice.toLowerCase()

    // if (humanChoice !== "Rock" || "Paper" ||  "Scissors") {
    //     alert("Must Choose Rock, Paper, or Scissors!!!")
    //     getHumanChoice()

    // }
    return humanChoice
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
    

    while (round < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();


        function playRound(humanSelection, computerSelection) {
            console.log(humanSelection)
            console.log(computerSelection)
            if (humanSelection === computerSelection) {
                console.log("It's a tie!")
            }
            else if (humanSelection === "rock" && computerSelection === "scissors") {
                console.log(`You win! ${humanSelection} beats ${computerSelection}!`)
                humanScore++
                round++
                console.log(`Current score: User: ${humanScore} | Computer: ${computerScore}`)
            }
            else if (humanSelection === "paper" && computerSelection === "rock") {
                console.log(`You win! ${humanSelection} beats ${computerSelection}!`)
                humanScore++
                round++
                console.log(`Current score: User: ${humanScore} | Computer: ${computerScore}`)
            }
            else if (humanSelection === "scissors" && computerSelection === "paper") {
                console.log(`You win! ${humanSelection} beats ${computerSelection}`)
                humanScore++
                round++
                console.log(`Current score: User: ${humanScore} | Computer: ${computerScore}`)
            }
            else {
                console.log(`You lose! ${computerSelection} beats ${humanSelection}!`)
                computerScore++
                round++
                console.log(`Current score: User: ${humanScore} | Computer: ${computerScore}`)
            }
        }

        playRound(humanSelection, computerSelection)
        
    }

    if(humanScore > computerScore){
        return `You did it! You beat the machine!`
    } else {
        return `Humanity is lost... The machine as won...`
    }

}





//  || humanChoice ==="Paper" || humanChoice === "Scissors"

// if(humanChoice !== "Rock"){
//     alert("Must Choose Rock, Paper, or Scissors!!!")
//     getHumanChoice()
// } else if (humanChoice !=="Paper") {
//     alert("Must Choose Rock, Paper, or Scissors!!!")
//     getHumanChoice()
// } else if (humanChoice === "Scissors") {
//     alert("Must Choose Rock, Paper, or Scissors!!!")
//     getHumanChoice()
// }
