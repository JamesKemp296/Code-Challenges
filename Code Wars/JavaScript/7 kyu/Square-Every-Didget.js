// Welcome. In this kata, you are asked to square every digit of a
// number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out,
// because 92 is 81 and 12 is 1.

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map((num) => {
        return Number(num) * Number(num)
      })
      .join("")
  )
}
