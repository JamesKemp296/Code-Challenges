// Write a small function that returns the values of an array that
// are not odd.

// All values in the array will be integers. Return the good values
// in the order they are given.

function noOdds(arr) {
  if (arr.length === 0) return [0]
  let newArr = []
  arr.map((num) => {
    if (num % 2 === 0) {
      newArr.push(num)
    }
  })
  return newArr
}
