// Create a function that takes one positive three digit integer
// and rearranges its digits to get the maximum possible number.
// Assume that the argument is an integer.

// Return -1 if the argument is not valid

const maxRedigit = (num) => {
  if (num < 100 || num > 999) return null
  return Number(
    String(num)
      .split('')
      .map(Number)
      .sort((a, b) => b - a)
      .join('')
  )
}
