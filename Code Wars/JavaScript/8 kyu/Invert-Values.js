// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives
// become positives.

function invert(array) {
  return array.map((num) => {
    return Math.sign(num) === 1 ? -num : Math.abs(num)
  })
}
