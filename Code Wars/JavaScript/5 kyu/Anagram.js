// What is an anagram? Well, two words are anagrams of each other if
// they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

function anagrams(word, words) {
  return words.filter((word2) => {
    return word2.split('').sort().join('') === word.split('').sort().join('')
  })
}
