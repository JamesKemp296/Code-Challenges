// Given a mixed array of number and string representations of
// integers, add up the string integers and subtract this from the total
// of the non-string integers.

// Return as a number.

function divCon(x) {
  totalNums = 0
  totalStrings = 0
  x.map((e) => {
    if (typeof e === 'string') return (totalStrings += Number(e))
    return (totalNums += e)
  })
  return totalNums - totalStrings
}
