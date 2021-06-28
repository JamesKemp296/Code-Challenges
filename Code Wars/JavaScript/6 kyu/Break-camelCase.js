// Complete the solution so that the function will
// break up camel casing, using a space between words.

function solution(str) {
  const newArr = str.split('').map(letter => {
    if (letter === letter.toUpperCase()) {
      letter = ' ' + letter
    }
    return letter
  })
  return newArr.join('')
}
