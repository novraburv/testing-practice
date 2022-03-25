const reverseString = require('./reverseString')

test('reverse hello', () => {
  expect(reverseString('hello')).toBe('olleh')
})

test("reverse 'hello world!'", () => {
  expect(reverseString('hello world!')).toBe('!dlrow olleh')
})

test('reverse BKN-PTKI', () => {
  expect(reverseString('BKN-PTKI')).toBe('IKTP-NKB')
})
