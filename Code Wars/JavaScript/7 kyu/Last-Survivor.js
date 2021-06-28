// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be
// removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases
// (there is no empty space).
// Return the only letter left.

const lastSurvivor = (letters, coords) => {
  const lettersArr = letters.split("")
  const myCoords = coords.map((coord) => {
    lettersArr.splice(coord, 1)
  })
  return lettersArr.join("")
}
