// Friday 13th or Black Friday is considered as unlucky day. 
// Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

function unluckyDays(year){
  const date = new Date()  
  let counter = 0
  for (i=0; i < 12; i++) {
    date.setFullYear(year, i, 13)
    if (date.getDay() === 5) {
      counter++
    }
  }   
  return counter   
}