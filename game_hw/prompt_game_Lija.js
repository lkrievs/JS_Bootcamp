// // HW FOR NEXT TUESDAY, make a game using prompts, get creative

// EXAMPLE
// let age = prompt('How old are you?')
// console.log(age) // saves the answer when prompted in browser

// if (age < 18) {
//     alert('You are not an adult yet!')
// } else {
//     alert('You are an adult')
// }

// let age = prompt('How old are you?')
// let enteredTheCasino = false

// if (age < 21) {
//        console.log('You cannot enter!')
//  } else {
//         console.log('Time to gamble!')
//         enteredTheCasino = true
// }

// if (enteredTheCasino) {
//     let machineChoice = prompt('Do you want to use the betting machine (B) or roulette (R) ?')
//     let B = true
//     let R = false

//     if (machineChoice === B) {
//         alert("You've chosen the betting machine") // can also do console.log
//     } else if (machineChoice === R) {
//         alert("You've chosen the roulette machine")
//     }
// }








let firstName = prompt('Please enter your name: ')

alert('Hi, ' + firstName + '! Welcome to my restaurant!')
let order = prompt('Would you like food or drinks?')

let waiter = ''
if (order === 'food') {
    waiter = prompt('Sure! Pizza or burger?')
} 

if (waiter === 'pizza') {
    let pizza = prompt('Great choice! Cheese or pepperoni?')
    if (pizza === 'cheese') {
        alert('Can never go wrong with cheese. Enjoy!')
    } else if (pizza === 'pepperoni') {
        alert('Pepperoni is a good choice. Enjoy your meal!')
    } else {
        alert("Sorry, we don't have that.")
    }
} else if (waiter === 'burger') {
    let burger = prompt('Ok. Regular or vegetarian?')
    if (burger === 'regular') {
        alert("That'll be delicious!")
        } else if (burger === 'vegetarian') {
        alert('Healthy and tastey!')
    } 
} 

if (order === 'drinks') {
    let age = prompt('How old are you ' + firstName + '?')
    if (age >= 21) {
        alert('Super. You can drink!')
        waiter = prompt('Beer or wine?')
    } else {
        alert("Sorry. You get water.")
    }
} 

if (waiter === 'beer') {
    alert('Nothing like a crisp cold beer on a sunny day!')
    let beer = prompt('Craft or draft?')
    if (beer === 'craft') {
        alert("You'll love our craft beer selection.")
    } else if (beer === 'draft') {
        alert("Excellent. I'll bring that out for you.")
    } 
 } else if (waiter === 'wine') {
    let wine = prompt('Classy. Red or white?')
    if (wine === 'red') {
        alert("Fine taste you have!")
        } else if (wine === 'white') {
        alert('A refreshing choice!')
    } 
}

