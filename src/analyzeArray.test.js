const analyzeArray = require('./analyzeArray.js')

const tests = [
  [[1, 2, 3, 4, 5], { average: 3, min: 1, max: 5, length: 5 }],
  [[31, 21, -33, 34, 54, -43, 22], { average: 12.285714285714286, min: -43, max: 54, length: 7 }],
  [[1, 2, "'5'", 4, 5], 'array contains non-number value'],
  [5, 'argument is not an array'],
  ['12345', 'argument is not an array']
]

tests.forEach(x => {
  const [input, expected] = x

  test(`[${input}] return ${JSON.stringify(expected)}`, () => {
    expect(analyzeArray(input)).toStrictEqual(checkExpected(expected))
  })
})

function checkExpected (noun) {
  if (typeof noun !== 'object') return noun
  return {
    average: noun.average,
    min: noun.min,
    max: noun.max,
    length: noun.length
  }
}
