// Caesar's cipher

function caesarsCipher() {
    console.log('Hello WOrld')
    let text = document.getElementById('msg-input').value
    let key = document.getElementById('key-input').value

    key = key % 26 // because there are 26 letters in the alphabet (can also write key %= 26)

    let encryptedText = ''    // make equal to an empty string
    let currentCharCode = null
    let newCharCode = null
    for (let i = 0; i < text.length; i++) {
        currentCharCode = text.charCodeAt(i)
        newCharCode = currentCharCode + key
        
        if (isCapitalLetter(currentCharCode)) {
            if (newCharCode > 90) {
                newCharCode -= 26
            } else if (newCharCode < 65) {
                newCharCode += 26
            }
        } else if (isLowerCaseLetter(currentCharCode)) {
            if(newCharCode > 122) {
                newCharCode -= 26
            } else if (newCharCode < 97) {
                newCharCode += 26
            }
        } else {
            newCharCode = currentCharCode // if it's not a capital or lower case letter, maybe it's a space or punctuation
        }

        let newChar = String.fromCharCode(newCharCode)
        encryptedText += newChar

    }
    let resultContainer = document.getElementById('result-container')
    resultContainer.innerText = encryptedText
}

function isCapitalLetter(charCode) {
    return charCode >= 65 && charCode <= 90
}

function isLowerCaseLetter(charCode) {
    return charCode >= 97 && charCode <= 122
}