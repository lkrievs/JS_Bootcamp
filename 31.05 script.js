function findSum(numbers) {
    let sum = 0
    for (let nr of numbers) {
        sum += nr 
    }
    return sum
}

function findSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}

// console.log(findSum([1, 5, 9]))

for (let i = 0; i <= 100; i++) {
    // console.log(i)
    hundredNumbers = i + ','
}
// console.log(hundredNumbers)

let nr = 8
let shifted = nr >> 2
// console.log(shifted)

// let arr = [1, 9, 5]
// arr.sort()
// console.log(arr)

let arr = [1, 9, 5]
arr.sort(function(a,b) {
    // return a - b // ascending order
    return b - a // descending order
})
// console.log(arr)

// function greetEveryone(names) {
//     // for (let i = 0; i < names.length; i++) {
//     //     console.log('Hello, ' + names[i] + '!')
//     // }
//     for (let name of names) {
//         console.log('Hello, ' + name + '!')
//     }
// }

// greetEveryone(['Indra', 'Elina', 'Anna', 'Lija'])


// class Array {

//     constructor() {
//         this.collection = []
//     }

//     at(index) {
//         return this.collection[index]
//     }

//     push(el) {
//         this.collection.push(el)
//     }
// }

// let firstArray = new Array()
// let secondArray = new Array()

// firstArray.at(2)
// firstArray.push(2)

// function printArguments(...args) { // ... means we don't know how many arguments there will be
//     for (let arg of args) {
//         console.log(arg)
//     }
// }

// printArguments()
// printArguments(1)
// printArguments(1,2)

function findMin(numbers) {
    let min = null
    for (let nr of numbers) {
        if (!min) {
            min = nr
            continue 
        }
        if (nr < min) {
            min = nr
        }
    }
    return min
}

console.log(findMin([5, 7, 11]))