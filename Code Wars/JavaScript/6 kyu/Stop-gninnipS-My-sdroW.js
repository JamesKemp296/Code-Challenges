// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter
// words reversed.

function spinWords(str) {
  return str
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ")
}
