// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between
// left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small
// letters and return who wins the fight. When the left side wins return
// Left side wins!, when the right side wins return Right side wins!,
// in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

function alphabetWar(fight) {
  let left = 0
  let right = 0
  fight.split("").map((letter) => {
    switch (letter) {
      case "w":
        left += 4
        break
      case "p":
        left += 3
        break
      case "b":
        left += 2
        break
      case "s":
        left += 1
        break
      case "m":
        right += 4
        break
      case "q":
        right += 3
        break
      case "d":
        right += 2
        break
      case "z":
        right += 1
        break
    }
  })
  if (right > left) {
    return "Right side wins!"
  } else if (right < left) {
    return "Left side wins!"
  } else {
    return `Let's fight again!`
  }
}
