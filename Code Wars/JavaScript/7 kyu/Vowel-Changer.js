// Create a function that changes all the vowels (excluding y) in a string,
// and changes them all to the same vowel. The first parameter of the function
// is the string, and the second is the vowel that all the vowels in the string
// are being changed to.

function vowelChange(str, vow) {
  return str
    .split("")
    .map((letter) => {
      return "aeiou".includes(letter) ? vow : letter
    })
    .join("")
}
