// Write a function named sumDigits which takes a number as input
// and returns the sum of the absolute value of each of the number's

// sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5decimal digits. For example:

function sumDigits(n) {
  let total = 0
  const myArr = (Math.abs(n) + '').split('')
  myArr.map((i) => {
    total = total + Number(i)
  })
  return total
}
