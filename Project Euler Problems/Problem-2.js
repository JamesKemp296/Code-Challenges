// Project Euler: Problem 2: Even Fibonacci Numbers

// By considering the terms in the Fibonacci sequence
// that do not exceed the nth term, find the sum of
// the even-valued terms.

function fiboEvenSum(n) {
  const start = n
  let previous = 0
  let current = 1
  let sum = 0
  for (let i = start; i > 0; i--) {
    const next = previous + current
    if (next % 2 === 0) sum += next
    previous = current
    current = next
  }
  console.log(sum)
}

fiboEvenSum(18)
