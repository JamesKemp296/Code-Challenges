// Pirates have notorious difficulty with enunciating.
// They tend to blur all the letters together and
// scream at people.

// At long last, we need a way to unscramble what these pirates
// are saying.

// Write a function that will accept a jumble of letters
// as well as a dictionary, and output a list of words that
// the pirate might have meant.

function grabscrab(anagram, dictionary) {
  const target = anagram
    .split('')
    .sort()
    .join('')
  const result = []
  for (i = 0; i < dictionary.length; i++) {
    if (
      dictionary[i]
        .split('')
        .sort()
        .join('') === target
    ) {
      result.push(dictionary[i])
    }
  }
  return result
}
