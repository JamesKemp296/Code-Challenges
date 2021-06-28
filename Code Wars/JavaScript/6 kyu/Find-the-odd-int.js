// Given an array, find the integer that appears an odd
// number of times.

// There will always be only one integer that appears an
// odd number of times.

function findOdd(arr) {
  const counts = new Map()
  for (const num of arr) {
    const item = counts.get(num)
    if (item !== undefined) {
      counts.set(num, item + 1)
    } else {
      counts.set(num, 1)
    }
  }
  for (const [num, count] of counts) {
    if (count % 2) {
      return num
    }
  }
}
