const container = document.querySelector("#container")
const greeting = "Welcome to rock paper scissors!"
const rules = "Rules: play as you would normally play rock paper scissors."
const compArray = ["rock", "paper", "scissors"]
const selection = document.createElement("span")
selection.textContent = "Choose your weapon"

// alert(greeting)
// alert(rules)

// run the playGame function after clicking the button
// after click, the computer already has his choice
//

window.addEventListener("click", () => {
  container.appendChild(selection)

  const computer = () => {
    return compArray[~~(Math.random() * compArray.length)]
  }

  const paper = document.querySelector(`div[id="paper"]`)
  const rock = document.querySelector(`div[id="rock"]`)
  const scissors = document.querySelector(`div[id="scissors"]`)

  if (!container) return

  if (paper && computer == "scissors") {
    console.log("you lose")
  } 
})
