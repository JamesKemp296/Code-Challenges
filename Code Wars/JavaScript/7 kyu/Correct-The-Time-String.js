// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

function timeCorrect(timestring) {
  if (!timestring) return timestring
  if (!timestring.includes(':') || /[a-zA-Z]/g.test(timestring)) return null
  let num1 = Number(timestring.split(':')[0])
  let num2 = Number(timestring.split(':')[1])
  let num3 = Number(timestring.split(':')[2])
  if (num3 >= 60) {
    num3 = num3 - 60
    num2 = num2 + 1
  }
  if (num2 >= 60) {
    num2 = num2 - 60
    num1 = num1 + 1
  }
  while (num1 > 24) {
    num1 = num1 - 24
  }
  if (num1 === 24) {
    num1 = 0
  }
  num1 = `${num1}`.length === 2 ? num1 : `0${num1}`
  num2 = `${num2}`.length === 2 ? num2 : `0${num2}`
  num3 = `${num3}`.length === 2 ? num3 : `0${num3}`
  return `${num1}:${num2}:${num3}`
}
