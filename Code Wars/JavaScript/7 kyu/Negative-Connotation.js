// Looking at the first letter of each word (case insensitive-"A"
// and "a" should be treated the same), you need to determine whether
// it falls into the positive/first half of the alphabet ("a"-"m") or
// the negative/second half ("n"-"z").

// Return True/true if there are more (or equal) positive words than
// negative words, False/false otherwise.

function connotation(str) {
  if (!str) return false
  let positiveWords = 0
  let negativeWords = 0
  str
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .forEach((word) => {
      const charCode = word[0].toLowerCase().charCodeAt() - 96
      if (charCode > 0 && charCode < 14) {
        positiveWords += 1
      } else if (charCode > 13 && charCode < 27) {
        negativeWords += 1
      }
    })
  return positiveWords >= negativeWords
}
