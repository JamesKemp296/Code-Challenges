// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).

function getCount(str) {
  return Array.from(str).filter((letter) => "aeiou".includes(letter)).length
}
