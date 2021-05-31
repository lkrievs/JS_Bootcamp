// // 20 APRIL 2021

// let letter = 'ABC'

// let charCode = letter.charCodeAt(0)
// // console.log(charCode) // 65
// // console.log(letter.charCodeAt(1)) // 66

// let l = String.fromCharCode(77)
// // console.log(l) // M


// // HW if you can do it --> should be about 20 lines of code
// function caesarsCipher(text, key) {

// }

// // RANDOM NUMBERS

// let random = Math.random() * 10 // 0.0000 - 0.99999999999
// let floored = Math.floor(random)
// // console.log(random) // each time will output a random number
// // console.log(floored) // gives us the integer --> no decimal (0-9)

// // Math.floor(4.5) === 4 // simply getting rid of the decimal, changing from a floating point number to an integer
// // Math.floor(5.7) === 5

// // alert('Heyyyy')
// // let answer = prompt('What day is today?')

// // console.log(answer)

// // guessing game

// // function generateRandomNumber(upperBound) {
// //     let random = Math.random() * upperBound // 0.0000 - 9.99999999999
// //     let floored = Math.floor(random)
// //     return floored
// // }

// // let random = generateRandomNumber(10)

// // let guess = prompt('What number am I thinking of (0-9)?')
// // if (guess === random) {
// //     alert('Good job, you have guessed the number! It was' + random)
// //  } else {
// //     alert('Sorry! You lost! The number was ' + random)
// //  }


// HTML


// function greet() {
//     console.log('Hello world!')
// }

// changes text on button click --> don't forget to change call in index.html "on button click"
// function changeText() {
//     let text = document.getElementById('myText')
//     text.innerHTML = 'ABCDEF'
// }

// changes background color on button click

let isGreen = true
let colors = ['red', 'green', 'blue', 'purple', 'yellow', 'cyan']
function changeBackground() {
    let b = document.body
    let randomIndex = Math.floor(Math.random() * colors.length) // max of random is 0.99999 0 - 6, multiply by number of elements in array
    let randomColor = colors[randomIndex]
  
        b.style.backgroundColor = randomColor
   
    
    isGreen = !isGreen // allows to to click back and forth between random colors
}
