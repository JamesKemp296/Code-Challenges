// Your task is to sort a given string. Each word in the string will
// contain a single number. This number is the position the word should
// have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in
// the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

function order(words) {
  if (words.length === 0) return words
  const findNumber = words.match(/[1-9]/g).map(Number)
  const arrayWords = words.split(" ")
  let result = []
  arrayWords.map((item, i) => {
    const index = findNumber.indexOf(i + 1)
    result.push(arrayWords[index])
  })
  return result.join(" ")
}
