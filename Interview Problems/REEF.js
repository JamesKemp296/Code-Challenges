// REEF INTERVIEW
// Make a function that checks weather or not a given
// string is a palindrome

const pall = str => {
  if (!str || str.length === 0) return 'not a pally'
  let f = str.length - 1
  for (i = 0; i <= str.length / 2; i++) {
    if (str[f] !== str[i]) return 'not a pally'
    f = f - 1
  }
  return 'is a pally'
}

const mysrt = 'qwerttrewq'
console.log(pall(mysrt))
