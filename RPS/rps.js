const ROCK_IMG = 'rock.jpg'
const PAPER_IMG = 'paper.jpg'
const SCISSORS_IMG = 'scissors.jpg' // similar to let but can't change value, usually write with cap letters

let playerScore = 0
let enemyScore = 0

function chooseWeapon() {
    let playerWeaponSelect = document.getElementById('playerWeaponSelect')
    let playerChoiceImg = document.getElementById('playerChoiceImg')
    changeImage(playerChoiceImg, playerWeaponSelect.value)
}

function changeImage(img, selectedWeapon) {
    if (selectedWeapon === 'rock') img.src = ROCK_IMG
    else if (selectedWeapon === 'paper') img.src = PAPER_IMG
    else if (selectedWeapon === 'scissors') img.src = SCISSORS_IMG
}

function play() {
    let playerWeapon = document.getElementById('playerWeaponSelect').value // don't want the full value just what is written in the select
    if (playerWeapon !== 'not_selected') {
        let enemyWeapon = getRandomWeapon()
        let enemyImg = document.getElementById('enemyChoiceImg')
        changeImage(enemyImg, enemyWeapon)

        let fightResult = fight(playerWeapon, enemyWeapon)
        displayFightResult(fightResult)
        changeScore(fightResult)
        saveInHistory(playerWeapon, enemyWeapon, fightResult)
    }
}

function getRandomWeapon() {
    let weapons = ['rock', 'paper', 'scissors']
    let randomWeaponIndex = Math.floor(Math.random() * weapons.length)
    return weapons[randomWeaponIndex]
}

function fight(pw, ew) {
    if (pw === 'rock') {
        if (ew === 'rock') return 0 // it's a tie
        else if (ew === 'paper') return -1 // player lose
        else if (ew === 'scissors') return 1 // player win
    } else if (pw === 'paper') {
        if (ew === 'rock') return 1 
        else if (ew === 'paper') return 0 
        else if (ew === 'scissors') return -1 
    } else if (pw === 'scissors') {
        if (ew === 'rock') return -1 
        else if (ew === 'paper') return 1 
        else if (ew === 'scissors') return 0 
    }
}

function changeScore(fightResult) {
    if (fightResult === 1) playerScore++
    else if (fightResult === -1) enemyScore++
}

function displayFightResult(fightResult) {
    let msg = ''
    switch(fightResult) {
        case -1: 
            msg = 'You have <span style="color:red;">lost</span>!'
            break
        case 0: 
            msg = 'It is a <span style="color:darkgrey;">tie</span>!'
            break
        case 1: 
            msg = 'You have <span style="color:green;">won</span>!'
            break
        default:
            msg = 'Rock Paper Scissors'
            break
    }
    let fightResultContainer = document.getElementById('fightResult')
    fightResultContainer.innerHTML = msg  // innerHTML saves the HTML elements, doing HTML within javascript
}

function saveInHistory(playerWeapon, enemyWeapon, fightResult) {
    let historyContainer = document.getElementById('historyContainer')
    let msg = ''
   
    playerWeapon = playerWeapon[0].toUpperCase() + playerWeapon.slice(1)
    enemyWeapon = enemyWeapon[0].toUpperCase() + enemyWeapon.slice(1)

    let playerSpan = `<span class='${playerWeapon[0]}'>${playerWeapon}</span>`
    let enemySpan = `<span class='${enemyWeapon[0]}'>${enemyWeapon}</span>`
    switch(fightResult) {
        case -1: 
            msg = playerSpan + ' loses to ' + enemySpan
            break
        case 0: 
            msg = playerSpan + ' ties ' + enemySpan 
            break
        case 1: 
            msg = playerSpan + ' beats ' + enemySpan 
            break
    }

    let score = `[${playerScore} - ${enemyScore}]`
    let fullMsg = msg + score // message created in switch block
    let historyRow = '<div class="historyRow">' + fullMsg + '</div>'
    historyContainer.innerHTML += historyRow
}




// switch case // asking if 5 is the case
// let number = 5

// switch(number) {
//     case 5:
//         console.log('ITS FIVE!')
//         break // to stop the switch block once it's true
//     case 1:
//         console.log('ITS ONE!')
//         break
//     case 3:
//         console.log('ITS THREE!')
//         break
// }
