// Recreate spongebob meme text

function spongeMeme(sentence) {
  return sentence
    .split('')
    .map((letter, i) => {
      if (i % 2 === 0) return letter.toUpperCase()
      return letter.toLowerCase()
    })
    .join('')
}
