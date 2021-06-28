// Build a function that will take the length of each side
// of a triangle and return if it's either an Equilateral, an
// Isosceles, a Scalene or an invalid triangle.

// It has to return a string with the type of triangle.

const typeOfTriangle = (a, b, c) => {
  if ([a, b, c].some(isNaN) || a >= b + c || b >= a + c || c >= a + b)
    return "Not a valid triangle"
  if (a === b && b === c) return "Equilateral"
  if (a === b || a === c || b === c) return "Isosceles"
  return "Scalene"
}
