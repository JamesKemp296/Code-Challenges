// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0)
  return sum / array.length
}
