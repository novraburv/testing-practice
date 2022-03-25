const caesarCipher = require('./caesarCipher.js')

const tests = [
  ['hello world', 3, 'khoor zruog'],
  ['Hello-World', 2, 'Jgnnq-Yqtnf'],
  ['90 days', -2, '90 bywq']
]

tests.forEach(x => {
  const [string, shift, expected] = x

  test(`${string} shifted ${shift} letters is ${expected}`, () => {
    expect(caesarCipher(string, shift)).toBe(expected)
  })
})
