import Deck from "./deck.js" //import Deck 

function startGame() {
    const deck = new Deck() //create a new deck
    deck.shuffle()   //shuffle the deck
    const playerHand = [] //create an empty array to hold the player's hand
    const dealerHand = [] //create an empty array to hold the dealer's hand
    const playerScore = document.querySelector('.player-score') //select the player score
    const dealerScore = document.querySelector('.dealer-score') //select the dealer score
    const playerHandDiv = document.querySelector('.player-hand') //select the player hand div
    const dealerHandDiv = document.querySelector('.dealer-hand') //select the dealer hand div
    const hitButton = document.querySelector('.hit-button') //select the hit button
    const stayButton = document.querySelector('.stay-button') //select the stay button
    const resetButton = document.querySelector('.reset-button') //select the reset button
    const message = document.querySelector('.message') //select the message div
    const resetButtonDiv = document.querySelector('.reset-button-div') //select the reset button div
    const hitButtonDiv = document.querySelector('.hit-button-div') //select the hit button div
    const stayButtonDiv = document.querySelector('.stay-button-div') //select the stay button div
    const playerHandValue = document.querySelector('.player-hand-value') //select the player hand value
    const dealerHandValue = document.querySelector('.dealer-hand-value') //select the dealer hand value
    const playerHandDiv = document.querySelector('.player-hand-div') //select the player hand div
    const dealerHandDiv2 = document.querySelector('.dealer-hand-div2') //select the dealer hand div
    const dealerHandDiv3 = document.querySelector('.dealer-hand-div3') //select the dealer hand div
    const dealerHandDiv4 = document.querySelector('.dealer-hand-div4') //select the dealer hand div
    const dealerHandDiv5 = document.querySelector('.dealer-hand-div5') //select the dealer hand div
    const playerHandDiv6 = document.querySelector('.player-hand-div6') //select the player hand div
}

startGame()
