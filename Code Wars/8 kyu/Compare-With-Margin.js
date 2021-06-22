// Create a function close_compare that accepts 3 parameters:
// a, b, and an optional margin. The function should return
// whether a is lower than, close to, or higher than b. a
// is "close to" b if margin is higher than or equal to the
// difference between a and b.

// When a is lower than b, return -1.

// When a is higher than b, return 1.

// When a is close to b, return 0.

// If margin is not given, treat it as zero.

const closeCompare = (a, b, margin = 0) => {
  const difference = Math.abs(a - b)
  if (difference <= margin) {
    return 0
  } else if (a < b) {
    return -1
  } else if (a > b) {
    return -1
  }
}
