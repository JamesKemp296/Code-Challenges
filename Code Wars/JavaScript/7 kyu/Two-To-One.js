// Take 2 strings s1 and s2 including only letters from ato z.
// Return a new sorted string, the longest possible, containing
// distinct letters - each taken only once - coming from s1 or s2.

// Example:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

function longest(s1, s2) {
  return [...new Set((s1 + s2).split('').sort())].join('')
}
