// The examples below show you how to write function accum

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

function accum(s) {
  return s
    .split("")
    .map((char, i) => {
      console.log(i + 1)
      return char.toUpperCase() + char.toLowerCase().repeat(i)
    })
    .join("-")
}
