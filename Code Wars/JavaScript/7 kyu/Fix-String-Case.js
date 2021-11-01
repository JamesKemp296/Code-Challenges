// In this Kata, you will be given a string that may have mixed
// uppercase and lowercase letters and your task is to convert that
// string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase
// letters, convert the string to lowercase.

function solve(s) {
  let lowerC = 0
  let upperC = 0
  s.split('').forEach((letter) => {
    letter === letter.toLowerCase() ? lowerC++ : upperC++
  })
  return lowerC > upperC ? s.toLowerCase() : s.toUpperCase()
}
