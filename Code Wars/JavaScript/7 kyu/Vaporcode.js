// Write a function that converts any sentence into a V A P O R W A V E sentence.
// a V A P O R W A V E sentence converts all the letters into uppercase,
// and adds 2 spaces between each letter (or special character) to create
// this V A P O R W A V E effect.

// Examples
// "Lets go to the movies" =  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"

function vaporcode(string) {
  return string
    .split("")
    .filter((char) => char !== " ")
    .map((char) => char.toUpperCase())
    .join("  ")
}
