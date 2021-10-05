//  Given a string "C is alive!", your function should return "C Is AlIvE!"

function swapVowelCase(str) {
  return str
    .split('')
    .map((char) => {
      if ('aeiou'.includes(char)) return char.toUpperCase()
      if ('AEIOU'.includes(char)) return char.toLowerCase()
      return char
    })
    .join('')
}
