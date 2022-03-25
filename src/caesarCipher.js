function caesarCipher (string, shift) {
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const LETTERSLOWERCASE = LETTERS.toLowerCase()

  return string.split('')
    .map(letter => {
      let index = (LETTERS.indexOf(letter.toUpperCase()) + shift) % 26
      if (index < 0) index += 26

      if (/[A-Z]/.test(letter)) return LETTERS[index]
      if (/[a-z]/.test(letter)) return LETTERSLOWERCASE[index]
      return letter
    })
    .join('')
}

module.exports = caesarCipher
