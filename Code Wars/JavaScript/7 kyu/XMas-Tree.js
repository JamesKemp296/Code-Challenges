// ____#____              1
// ___###___              2
// __#####__              3
// _#######_              4
// #########       -----> 5 - Height of Tree
// ____#____        1
// ____#____        2 - Trunk/Stem of Tree

function xMasTree(n) {
  let tree = []
  let lineCount = n * 2 - 2
  let hashTagCount = 1
  for (let i = 0; i < n; i++) {
    tree.push(
      "_".repeat(lineCount / 2) +
        "#".repeat(hashTagCount) +
        "_".repeat(lineCount / 2)
    )
    lineCount -= 2
    hashTagCount += 2
  }
  return [...tree, tree[0], tree[0]]
}
