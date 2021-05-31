// Sum

function findSum(arr) {
    let sum = 0
    for (let nr of arr) {
        sum += nr
    }
    return sum
}

// console.log(findSum([1, 2, 3])) // should return 6

// Reverse a string

function reverseText(text) {
    let reversedText = ''
    
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i]
    }
    return reversedText
}

// console.log(reverseText('ABC'))

// Sum of Powers

function sumOfPowers(arr, power) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], power) 
    }
    return sum 
}

// console.log(sumOfPowers([3], 3)) // 14

// function printResult(a, b) {
//     console.log(a + b)
// }

// function add(a, b, callback) {
//     return a + b 
// }

// add(10, 20, printResult)

//Sorting numbers

// let numbers = [5, 3, 2, 4, 1]

// function sortFunction(a, b) {
//     return a - b // in descending order we'd write b - a 
// }

// numbers.sort(sortFunction)

// let numbers = [5, 3, 2, 4, 1]
// numbers.sort()
// console.log(numbers)

// Words sorted by length

// let words = ['A', 'Dog', 'Kitty', 'BA']
// words.sort(function(a, b) {
//     return a.length - b.length
// })
// console.log(words)



// let nrs = [1, 4, 7, 8, 9, 12, 13, 15, 16]

// Increase each number by 2
// for (let i = 0; i < nrs.length; i++) {
//     nrs[i] = nrs[i] + 2
// }

// keep only even numbers
// nrs = nrs.filter(function(nr) {
//     return nr % 2 === 0
// })

// console.log(nrs)

// Recursion --> a function that calls itself

// function func(limit) {
//     if(limit < 0) {
//         return 
//     }
//     console.log(limit)
//     func(limit - 1)
// }

// Recursion using a for loop, fibonacci number

// function fibonacci(n) {
    
//     let firstNumber = 0
//     let secondNumber = 1
//     let currentNumber = null 

//     for (let i = 2; i < n; i++) {
//         currentNumber = firstNumber + secondNumber
//         firstNumber = secondNumber
//         secondNumber = currentNumber
//     }

//     return currentNumber
// }

// console.log(fibonacci(7)) // 8

// function fibonacciRecursive(n) {
//     if (n <= 1) {
//         return n 
//     }

//     return fibonacciRecursive(n-2) + fibonacciRecursive(n-1)
// }

// fibonacciRecursive(10)

