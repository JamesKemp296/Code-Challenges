// In this little assignment you are given a string of
// space separated numbers, and have to return the
// highest and lowest number.
// Output string must be two numbers separated by a single space,
// and highest number is first.

const highAndLow = (numbers) => {
  const numArr = numbers
    .split(" ")
    .map((num) => {
      return Number(num)
    })
    .sort((a, b) => a - b)
  return `${numArr[numArr.length - 1]} ${numArr[0]}`
}
