function add (a, b) {
  if (checkNumber(a, b)) return 'Argument contains non-number'
  return a + b
}

function subtract (a, b) {
  if (checkNumber(a, b)) return 'Argument contains non-number'
  return a - b
}

function divide (a, b) {
  if (checkNumber(a, b)) return 'Argument contains non-number'
  return a / b
}

function multiply (a, b) {
  if (checkNumber(a, b)) return 'Argument contains non-number'
  return a * b
}

function checkNumber () {
  return [...arguments].some(x => typeof x !== 'number')
}

module.exports = { add, subtract, divide, multiply }
