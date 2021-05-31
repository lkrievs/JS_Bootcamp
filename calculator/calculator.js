let firstNumber = null
let secondNumber = null
let operator     = null

function setValue(nr) {
    let res = document.getElementById('displayedResult')
    if (!firstNumber) {
        firstNumber = nr
        res.value = nr
    } else if (firstNumber) {
        if (!operator) {
            firstNumber = firstNumber.toString() + nr.toString()
            res.value = firstNumber 
        } else {
            if (!secondNumber) { 
                secondNumber = nr 
                res.value = secondNumber
            }
            else { 
                secondNumber = secondNumber.toString() + nr.toString() 
                res.value = secondNumber
            }
        }
    }
}

function setOperator(op) {
    if (firstNumber && secondNumber && operator) {
        let result = doOperation()
        firstNumber = result
        secondNumber = null
        res.value = firstNumber
    }
    operator = op
}

function doOperation() {

    let fn = parseInt(firstNumber)
    let sn = parseInt(secondNumber)
    switch(operator) {
        case '+':
            return fn + sn
        case '-':
            return fn - sn
    }
}





// 13.05 --> practice

// for loop count to 20 by increments of 2

// for (let i = 0; i <= 20; i+=2) {
//     console.log(i)
// }

// count 0-20 but skip numbers 7 and 13
// break
// continue

// for (let i = 0; i <= 20; i++) {
//     if (i === 7 || i === 13) {
//         continue
//     }
//     console.log(i)
// }

// create an Array --> use square brackets
// let variableName = [1, 2, 3] // [1, 10, 3]
// variableName[1] = 10

// create an array with its elements also arrays --> [' ', ' ', ' '], [' ',' ',' '], [' ',' ',' ']

// for a single loop
// let emptyArr = []
// for (let i = 0; i < 3; i++)  {
//     emptyArr[i] = [' ', ' ', ' ']
// }
// console.log(emptyArr)

// 10 loops
// let emptyArr = []
// let howManyElements = 10
// for (let i = 0; i < 3; i++)  {
//     let a = []
//     for (let j = 0; j < howManyElements; j++) {
//         a[j] = ' ' // a.push(' ')
//     }
//     emptyArr.push(a)
// }
// console.log(emptyArr)


// Mario Pyramid 
//   #
//  ##
// ###
//####

// let pyramid = ''
// const HEIGHT = 10 // bottom of pyramid will have 10 hashtags

// let hashtagCount = 1
// let spacesCount = HEIGHT - 1
// for (let row = 0; row < HEIGHT; row++) {
//     let pyramidRow = ''
//     for (let s = 0; s< spacesCount; s++) {
//         pyramidRow += ' '
//     }
//     for (let h = 0; h < hashtagCount; h++) {
//         pyramidRow += '#'
//     }
//     hashtagCount++
//     spacesCount--
//     pyramid += pyramidRow + '\n'
// }
// console.log(pyramid)