const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LETTERSLOWERCASE = LETTERS.toLowerCase()

function caesarCipher (string, shift) {
  return string.split('')
    .map(letter => {
      if (/[A-Z]/.test(letter)) return LETTERS[(LETTERS.indexOf(letter) + shift) % 26]
      if (/[a-z]/.test(letter)) return LETTERSLOWERCASE[(LETTERSLOWERCASE.indexOf(letter) + shift) % 26]
      return letter
    })
    .join('')
}

module.exports = caesarCipher
