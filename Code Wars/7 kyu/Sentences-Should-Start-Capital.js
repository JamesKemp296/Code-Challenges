// In English, all words at the begining of a sentence should begin with 
// a capital letter.

// You will be given a paragraph that does not use capital letters. 
// Your job is to capitalise the first letter of the first word of 
// each sentence.

function fix(paragraph){  
  return paragraph.split('.').map(sentence => {
    if (sentence.charAt(0) === ' '){
      return ' ' + sentence.charAt(1).toUpperCase() + sentence.slice(2)
    } else {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1)
    }
  }).join('.')
}