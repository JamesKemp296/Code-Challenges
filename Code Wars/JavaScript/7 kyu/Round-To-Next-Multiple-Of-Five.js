// Given an integer as input, can you round it to the next
// (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30

function roundToNext5(n) {
  if (n % 5 !== 0) return (Math.floor(n / 5) + 1) * 5
  return Math.floor(n / 5) * 5
}
