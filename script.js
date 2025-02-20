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

const mainDiv = document.querySelector('div')
const btnRock = document.querySelector(".btnRock")
const btnPaper = document.querySelector(".btnPaper")
const btnScissors = document.querySelector(".btnScissors")
const guiHumanScore = document.querySelector(".humanScore")
const guiComputerScore = document.querySelector(".computerScore")
const action = document.querySelector(".action")

let humanSelection = '';

btnRock.addEventListener("click", () => {
    humanSelection = 'rock';
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection)
});

btnPaper.addEventListener("click", () => {
    humanSelection = 'paper';
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection)
});

btnScissors.addEventListener("click", () => {
    humanSelection = 'scissors';
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection)
});


    let humanScore = 0;
    let computerScore = 0;
    let round = 0;


        function playRound(humanSelection, computerSelection) {

            if (humanSelection === computerSelection) {
                console.log("It's a tie!")
                action.innerHTML = "It's a tie!"
            }
            else if (humanSelection === "rock" && computerSelection === "scissors") {
                console.log(`You win! ${humanSelection} beats ${computerSelection}!`)
                humanScore++
                round++
                console.log(`Current score: User: ${humanScore} | Computer: ${computerScore}`)
                action.innerHTML = `You win! ${humanSelection} beats ${computerSelection}!`
                guiHumanScore.innerHTML = humanScore
            }
            else if (humanSelection === "paper" && computerSelection === "rock") {
                console.log(`You win! ${humanSelection} beats ${computerSelection}!`)
                humanScore++
                round++
                console.log(`Current score: User: ${humanScore} | Computer: ${computerScore}`)
                action.innerHTML = `You win! ${humanSelection} beats ${computerSelection}!`
                guiHumanScore.innerHTML = humanScore
            }
            else if (humanSelection === "scissors" && computerSelection === "paper") {
                console.log(`You win! ${humanSelection} beats ${computerSelection}`)
                humanScore++
                round++
                console.log(`Current score: User: ${humanScore} | Computer: ${computerScore}`)
                action.innerHTML = `You win! ${humanSelection} beats ${computerSelection}`
                guiHumanScore.innerHTML = humanScore
              
            }
            else {
                console.log(`You lose! ${computerSelection} beats ${humanSelection}!`)
                computerScore++
                round++
                console.log(`Current score: User: ${humanScore} | Computer: ${computerScore}`)
                action.innerHTML = `You lose! ${computerSelection} beats ${humanSelection}!`
                guiComputerScore.innerHTML = computerScore
         
            }

            if ((humanScore > computerScore) &&  round === 5){
               alert(`You did it! You beat the machine!`)
            } else if ((computerScore > humanScore) &&  round === 5) {
                alert(`Humanity is lost... The machine has won!`) 
            }

        }



