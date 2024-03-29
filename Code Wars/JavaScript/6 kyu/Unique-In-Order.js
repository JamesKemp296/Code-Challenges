// Implement the function unique_in_order which takes as argument
// a sequence and returns a list of items without any elements with
// the same value next to each other and preserving the original order
// of elements.

function uniqueInOrder(str) {
  let myArr = Array.isArray(str) ? str : str.split("")
  let unique = myArr.filter((letter, i) => {
    return myArr[i] != myArr[i + 1]
  })
  return unique
}
