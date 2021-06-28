// Generate a valid randomly generated rgb color string.
// Assume all of them have 6 digits always.
// Valid Output
// #ffffff
// #25a403
// #000001

const generateColor = () => {
  const characters = "0123456789ABCDEF"
  let result = ""
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return `#${result}`
}
