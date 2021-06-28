// Create a function that returns a christmas tree of the correct height.

// For example:

// hieght = 5 should return:

//     *
//    ***
//   *****
//  *******
// *********

const christmasTree = (height) => {
  const result = []
  for (let r = 0; r < height; r++) {
    let row = []
    for (let c = 0; c < height - 1; c++) {
      row.push(c >= height - r - 1 ? "*" : " ")
    }
    result.push(row.join("") + "*" + row.reverse().join(""))
  }
  return result.join("\n")
}
