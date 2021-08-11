// Write a function, persistence, that takes in a positive parameter
// num and returns its multiplicative persistence, which is the number
// of times you must multiply the digits in num until you reach a
// single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

function persistence(num) {
  let count = 0
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
    count += 1
  }
  return count
}
