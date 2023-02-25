// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

// let person = {
//     pName: "Steve",
//     age: 55,
//     country: "USA"
// }

// function logData() {
//     console.log(person.pName + " is " + person.age + " years old and lives in " + person.country  )
// }

// logData()
// --------------------------


// let age = 27

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

// if ( age < 6 ) {
//     console.log('discount = free')
// } else if ( age < 18 ) {
//     console.log('child discount')
// } else if ( age < 27 ) {
//     console.log('student discount')
// } else if ( age < 67 ) {
//     console.log('full price, no discount available')
// } else {
//     console.log('senior citizen discount')
// }
// --------------------------

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

// console.log("The 5 largest countries is the world are:")
// for ( let i = 0; i < largeCountries.length; i++ ) {
//     console.log('- ' + largeCountries[i])
// }
// --------------------------

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")

// console.log(largeCountries)
// --------------------------

// let dayOfMonth = 13
// let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

// if ( dayOfMonth === 13 && weekday === "Friday" ) {
//     console.log('😱')
// }
// --------------------------

// let hands = ["rock", "paper", "scissors"]

// Create a function that returns a random item from the array

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }
// console.log(getHand())
// --------------------------


// let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

// let stageEl = document.getElementById("stage")
// let fightButton = document.getElementById("fightButton")

// fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.

//         let randomIndex1 = Math.floor(Math.random() * fighters.length)
//         let randomIndex2 = Math.floor(Math.random() * fighters.length)

//         console.log(fighters[randomIndex1] + " vs. " + fighters[randomIndex2])
//         stageEl.textContent = fighters[randomIndex1] + " vs " + fighters[randomIndex2]
// })
// --------------------------


let fruit = ["🍎", "🍊", "🍊", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function organize() {

    // loop thru objects
    for ( let i = 0; i < fruit.length; i++ ) {
        if ( fruit[i] === "🍎" ) {
            appleShelf.textContent += fruit[i] + " "
            // console.log(fruit[i])
        } else {
            orangeShelf.textContent += fruit[i] + " "
            // console.log(fruit[i])
        }
    }
}

organize()
