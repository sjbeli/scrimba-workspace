// javascript
let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let countHome = 0
let countGuest = 0

// initialze & set / reset scores
setScore()

function setScore(){
    homeScore.textContent = 0
    guestScore.textContent = 0
    countHome = 0
    countGuest = 0
}

// homeScore functions
function add1Home(){
    countHome += 1
    homeScore.textContent = countHome
}
function add2Home(){
    countHome += 2
    homeScore.textContent = countHome
}
function add3Home(){
    countHome += 3
    homeScore.textContent = countHome
}

// guestScore functions
function add1Guest(){
    countGuest += 1
    guestScore.textContent = countGuest
}

function add2Guest(){
    countGuest += 2
    guestScore.textContent = countGuest
}

function add3Guest(){
    countGuest += 3
    guestScore.textContent = countGuest
}