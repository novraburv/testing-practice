function analyzeArray (array) {
  if (!Array.isArray(array)) return 'argument is not an array'
  if (array.some(n => typeof n !== 'number')) return 'array contains non-number value'

  const average = array.reduce((a, b) => a + b, 0) / array.length
  const min = Math.min(...array)
  const max = Math.max(...array)
  const length = array.length

  return { average, min, max, length }
}

module.exports = analyzeArray
