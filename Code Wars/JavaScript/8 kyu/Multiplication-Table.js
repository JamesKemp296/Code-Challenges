// Your goal is to return multiplication table for number that
// is always an integer from 1 to 10.

function multiTable(number) {
  let myArr = []
  for (let i = 1; i < 11; i++) {
    myArr.push(`${i} * ${number} = ${i * number}`)
  }
  return myArr.join('\n')
}
