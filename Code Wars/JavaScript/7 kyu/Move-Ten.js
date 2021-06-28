// Move every letter in the provided string forward 10 letters
// through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return s
    .split('')
    .map((char) => {
      const myIndex = alphabet.indexOf(char)
      if (myIndex + 10 >= 26) {
        return String.fromCharCode(97 + myIndex - 16)
      }
      return String.fromCharCode(97 + myIndex + 10)
    })
    .join('')
}
