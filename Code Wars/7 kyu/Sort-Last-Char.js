function last(x) {
  let arr = x.split(' ')
  arr.sort((a, b) => {
    let strA = a.charAt(a.length - 1)
    let strB = b.charAt(b.length - 1)
    if (strA === strB) {
      return a
    } else {
      return strA > strB
    }
  })
  return arr
}
