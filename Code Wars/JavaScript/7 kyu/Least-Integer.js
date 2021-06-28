// Given an array of numbers and an index, return the index 
// of the least number larger than the element at the given index, 
// or -1 if there is no such index 
// ( or, where applicable, Nothing or a similarly empty value ).

function leastLarger(a,i) {
  const largerNums = a.reduce(function(result, num) {
    if (num > a[i]) {
      result.push(num)
    }
    return result
  }, []).sort((a, b)=>a-b)
  if(largerNums !== [] ) {
    return a.indexOf(largerNums[0])
  }
}