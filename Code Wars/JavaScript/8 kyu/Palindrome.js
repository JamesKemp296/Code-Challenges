// Is it a palindrome?

function isPalindrome(str) {
  if (!str || str.length === 0) return true
  let f = str.length - 1
  for (i = 0; i <= str.length / 2; i++) {
    if (str[f].toLowerCase() !== str[i].toLowerCase()) return false
    f = f - 1
  }
  return true
}
