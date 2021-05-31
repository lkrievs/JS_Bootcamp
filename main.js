
// // function multiply(a, b) {
// //     let result = a * b
// //     return result
// // }

// // let c = multiply(5, 5)


// // function add(a, b) {
// //     return a + b
// // }

// // function subtract(z, f) {
// //     return z - f
// // }

// // function divide(abc, def) {
// //     return abc / def
// // }

// // let resultofadd = add(5, 10) // 15
// // let resultofsubtract = subtract(10,10) // 0
// // let resultofdivide = divide(100, 50) // 2

// // let a = 5
// // a = 9
// // a = 20

// // // const b = 10
// // b = 9

// // // AND
// // let someVar = true
// // let v = true && true // true
// // let y = true && false // false

// // // OR ||
// // let otherVar = false
// // let zz = someVar || otherVar

// // // NOT !
// // let bb = !otherVar // bb = true

// // // > greather than
// // 5 < 3 // true

// // // > smaller than
// // 5 < 3 // false

// // // >=
// // 10 >= 0 // true

// // // <=
// // let q = 5 
// // q <= 5 * 5

// // // = assignment
// // let ff = 'ABC'

// // // == or === equals
// // 5 == 5 // true
// // 5 === 5 // true
// // 5 === 3 // false

// // // != not equals
// // 10 != 5 * 5 // true
// // 3 !== 9 // true

// // let u = 10
// // u = u + 2 // 12
// // u += 2 // 14

// // let r = 100
// // r = r - 2 // 98
// // r -= 2 // 96

// // let mm = 5
// // mm = mm * 5 // 25
// // mm *= 2 // 50

// // let p = 5
// // // ++ incrementing (w/ each line of code)
// // p = p + 1 // 6
// // p += 1    // 7 
// // p++       // 8
// // ++p       // 9 

// // // -- decrementing (w/ each line of code)
// // let qw = 100
// // qw = qw - 1 // 99
// // qw -= 1     // 98
// // qw--        // 97
// // --qw        // 96


// // let animal = {
// //     name: "Good doggo", // attribute
// //     color: ' white and black', // attribute
// //     height: 100 // attribute
// //     pet: function() { // a method is a function inside of an object
// //         console.log('The dog feels good when you pet it.')
// //     },
// //     feed: function(food) {
// //         console.log("the dog is enjoying eating" + food)
// //         return true
// //     }
// // }

// // // conditional statements
// // // branching
// // // if (true && false) {
// // //     console.log('IF!')
// // // } else if(true) {
// // //     console.log("ELSE IF!")
// // // }else {
// // //     console.log('ELSE!')
// // // }

// // console.log("Hi, World!"); // this is called a string (any text)

// // ---------------------

// // 19.04 LECTURE
// // let someNumber = 5
// // someNumber = 7 // don't need "let" again --> will make an error

// // let isSunny = true
// // let isSpring = true
// // let isRaining = false
// // let isHumid = true

// // let isSummerSoon = isSpring && isSunny
// // let itsGoingToBeThunder = isRaining || isHumid

// // if (!isSummerSoon) {
// //     console.log("Let's get the beach body ready!")
// // } else if (!itsGoingToBeThunder) {
// //     console.log("I'm going to need my umbrella!")
// //   }  else if (5 === 5) {
// //       console.log("hi")      
// // } else {
// //     console.log("What is the weather then?")
// // }
    
// // ! = not --> both are opposite so we don't know the weather

// // for (let i = 0; i < 11; i++) {
// //     console.log(i)
// // }

// // i = i += 1 ----> i = i + 1 or i++ --> these are the same

// // for (let i = 0; i < 10; i += 5) {
// //     console.log(i)
// // }

// let seasons = ["Winter", "Spring", "Summer", "Autumn"]
// // console.log(seasons.length) // length tells how many indexes in the brackets, the first starts at 0
// // console.log(seasons[1])
// // console.log(seasons[3])

// // seasons[1] = "The season of the flowers" // reassign value
// // console.log(seasons)

// // for (let i = 0; i < seasons.length; i++) { // i < 4 --> because there are 4 indexes in length
// //     console.log(seasons[i])
// // }

// // For-Of loop 
// // for (el of seasons) {
// //     console.log(el)
// // }

// // let numbers = [1, 2, 3, 4, 5]
// // let sum = 0 // put 0 because we can't see the whole array at once, we keep adding each number to 0
// // for(nr of numbers) {
// //     sum += nr
// // }
// // console.log(sum)

// // Defining the function
// function getSum(numbers) { // a function can be named anything
//     let sum = 0 // can be named anything
//     for (n of numbers) {
//         sum += n
//     }
//     return sum
// }

// // Calling the function
// // let ourSum = getSum([1,2,3,4,5]) 
// // console.log(ourSum)


// // console.log("Hello, World\nNext line\nthird line")
// // console.log("next line")

// // let text = "This is some text here are some more words" 
// // let word = text.slice(8, 12) // slice by character

// // let textSplit = text.split(" ") // split by word not character, // separator is the space
// // console.log(textSplit)
// // console.log(textSplit[2])

// // let otherText = 'ABC-DEF-gsd-gsejvbk-hsdgh'
// // console.log(otherText[0])
// // let otherTextSplit = otherText.split('-') // separator is -
// // console.log(otherTextSplit[0])

// // Modulo Operator
// // %  --> gives us the interger remainder after division
// // if a%b == 0, we say that a is divisible by b

// let z = 5 % 2 // 1
// let y = 13 % 5 // 3
// let w = 14 % 5 // 4
// let o = 15 % 5 // 0
// let p = 16 % 5 // 1
// let k = 17 % 5 // 2

// 18 // even number
// 19 // odd number
// 20 // even number
// 21 // odd number

// function isEven(number) {
//     return number % 2 === 0
// }

// // console.log(isEven(15)) // false
// // console.log(isEven(18)) // true

// alert('Warning!')

// let age = prompt('How old are you?')
// console.log(age) // saves the answer when prompted in browser

// if (age < 18) {
//     alert('You are not an adult yet!')
// } else {
//     alert('You are an adult')
// }

// ----------------
// 22.04

