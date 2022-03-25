const calculator = require('./calculator')

const add = [
  [1, 10, 11],
  [21, 50, 71],
  [10, 2.5, 12.5],
  [-5, 25, 20],
  ["''", 30, 'Argument contains non-number'],
  [99, "'1'", 'Argument contains non-number']
]

add.forEach(x => {
  const [a, b, expected] = x

  test(`${a} + ${b} return ${expected}`, () => {
    expect(calculator.add(a, b)).toBe(expected)
  })
})

const subtract = [
  [30, 14, 16],
  [-10, -23, 13],
  [-5, 21, -26],
  [2.1, 10, -7.9],
  [33, "'12'", 'Argument contains non-number']
]

subtract.forEach(x => {
  const [a, b, expected] = x

  test(`${a} - ${b} return ${expected}`, () => {
    expect(calculator.subtract(a, b)).toBe(expected)
  })
})

const divide = [
  [15, 3, 5],
  [10, 4, 2.5],
  [2.25, 10, 0.225],
  [-121, 11, -11],
  [72, "'8'", 'Argument contains non-number'],
  ["'242'", 11, 'Argument contains non-number']
]

divide.forEach(x => {
  const [a, b, expected] = x

  test(`${a} / ${b} return ${expected}`, () => {
    expect(calculator.divide(a, b)).toBe(expected)
  })
})

const multiply = [
  [2, 21, 42],
  [-7, 3, -21],
  [2.5, -5, -12.5],
  ["'23'", 100, 'Argument contains non-number']
]

multiply.forEach(x => {
  const [a, b, expected] = x

  test(`${a} * ${b} return ${expected}`, () => {
    expect(calculator.multiply(a, b)).toBe(expected)
  })
})
