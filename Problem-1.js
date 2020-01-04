// Project Euler: Problem 1: Multiples of 3 and 5

// If we list all the natural numbers below 10 that
// are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.

function multiplesOf3and5(number) {
  let sum = 0
  for (i = number; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) sum += i
  }
  return sum
}

multiplesOf3and5(1000) // 233168
multiplesOf3and5(49) // 543
multiplesOf3and5(19564) // 89301183
multiplesOf3and5(8456) // 16687353
