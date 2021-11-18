// Write a function that combines two arrays by alternatingly
// taking elements from each array in turn.

function mergeArrays(a, b) {
  let myArr = []
  const myLength = a.length > b.length ? a.length : b.length
  for (let i = 0; i < myLength; i++) {
    if (a[i]) myArr.push(a[i])
    if (b[i]) myArr.push(b[i])
  }
  return myArr
}
