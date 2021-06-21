// Your task is to make a function that takes the value of
// word and returns it with an "i" at the beginning of ]
// the word. For example we get the word "Phone", so we must
// return "iPhone". But we have a few rules:

// The word should not begin with the letter "I", for
// example Inspire.
// The number of vowels should not be greater than or equal
// to the number of consonants, for example East or Peace.
// ("y" is considered a consonant)
// The first letter should not be lowercase, for example road.
const i = (word) => {
  if (
    word === "" ||
    word[0].toLowerCase() === "i" ||
    word[0] === word[0].toLowerCase()
  )
    return "Invalid word"
  if (
    Array.from(word.toLowerCase()).filter((letter) => "aeiou".includes(letter))
      .length >=
    word.length / 2
  )
    return "Invalid word"
  return "i" + word
}
