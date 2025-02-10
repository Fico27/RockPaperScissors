

let humanScore = 0;
let computerScore = 0;
let round = 0;



function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return "Rock"
    } else if (computerChoice === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }

}

function getHumanChoice() {
    let rawHumanChoice = prompt("Please select Rock, Paper, or Scissors!")
    humanChoice = rawHumanChoice.toLocaleLowerCase()


}


function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        round++
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        humanScore++
        console.log(`Current score: User: ${humanScore} | Computer: ${computerScore}`)
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        humanScore++
        console.log(`Current score: User: ${humanScore} | Computer: ${computerScore}`)
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore++
        console.log(`Current score: User: ${humanScore} | Computer: ${computerScore}`)
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        computerScore++
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



// if (humanChoice != "Rock" || humanChoice != "Paper" || humanChoice != "Scissors") {
//     alert("Must Choose Rock, Paper, or Scissors!!!")
//     getHumanChoice()

// }

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
