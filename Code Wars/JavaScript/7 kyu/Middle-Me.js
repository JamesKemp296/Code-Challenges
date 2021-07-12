// Write a function that will take a key of X and place it in the 
// middle of Y repeated N times.

// Rules:
// If X cannot be placed in the middle, return X.
// N will always be > 0.

// Example:
// X = 'A';
// Y = '*';
// N = 10;
// Y repeated N times = '**********';
// X in the middle of Y repeated N times = '*****A*****';

const middleMe = (N, X, Y) => {
  let myArr = []
  for (let i = 0; i < N; i++) {
     myArr.push(Y) 
  }
  if (N % 2 == 0) {
     myArr.splice(myArr.length/2, 0, X)
  } else {
     return X
  }
  return myArr.join('')
}