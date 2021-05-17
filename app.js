const container = document.querySelector("#container")
const allBtns = document.querySelectorAll("button")
const greeting = "Welcome to rock paper scissors!"
const rules = "Rules: play as you would normally play rock paper scissors."
const selection = document.createElement("span")
selection.textContent = "Choose your weapon"

let computerSelection
let result
let plyScore = 0
let compScore = 0

// This function is for the weapon choice of the computer
function computer() {
  const compArray = ["rock", "paper", "scissors"]
  let randomChoice = Math.floor(Math.random() * 3)
  computerSelection = compArray[randomChoice]
}

// This function initiates the 5 rounds

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toString().toLowerCase()

  if (
    (computerSelection == "scissors" && playerSelection == "rock") ||
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors")
  ) {
    console.log(`You win!`)
    console.log(`You: ${plyScore++}`)
    plyScore++
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    console.log(`Computer chose ${computerSelection}, you lose!`)
    console.log(`Computer: ${compScore++}`)
    compScore++
  } else {
    console.log("it's a draw!")
  }
}

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    container.appendChild(selection)
    computer()
  })

  btn.addEventListener("click", (e) =>
    playRound(e.target.id, computerSelection)
  )
})
