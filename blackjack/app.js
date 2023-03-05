let player = {
  pName: "SJ Beli",
  chips: 800,
  sayHello: function () {
    console.log("Hello!" + " " + player.pName)
  }
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let hideStartBtn = document.getElementsByTagName("button")[0]
let hideHitMeBtn = document.getElementsByTagName("button")[1]
// console.log(hideButton)
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")

// 4. Render the player's name and chips in playerEl
playerEl.textContent = `Player ${player.pName} has: $${player.chips}`

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  hideHitMeBtn.removeAttribute("class", "hide-btn")
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Wish to draw a new card?"
    hideStartBtn.setAttribute("class", "hide-btn")
  } else if (sum === 21) {
    message = "You've Fot BlackJack!"
    hasBlackJack = true
    isAlive = false
    hideHitMeBtn.setAttribute("class", "hide-btn")
    hideStartBtn.removeAttribute("class")
  } else {
    message = "Sorry, you're out of the game!"
    isAlive = false
    hideHitMeBtn.setAttribute("class", "hide-btn")
    hideStartBtn.removeAttribute("class")
  }

  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
  // this was left out in the lesson - needed after getting blackjack!
  else {
    hasBlackJack = false
  }
}
