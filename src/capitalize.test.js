const capitalize = require('./capitalize')

test('capitalize superhuman to be Superhuman', () => {
  expect(capitalize('superhuman')).toBe('Superhuman')
})

test("capitalize 'the arrangement has been done.' to be 'The arrangement has been done.'", () => {
  expect(capitalize('the arrangement has been done.')).toBe('The arrangement has been done.')
})

test("capitalize 'running in the dark.' to be 'Running in the dark.'", () => {
  expect(capitalize('running in the dark.')).toBe('Running in the dark.')
})
