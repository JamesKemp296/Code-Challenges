// I have a cat and a dog.
// I got them at the same time as kitten/puppy.
// That was humanYears years ago.
// Return their respective ages now as
// [humanYears,catYears,dogYears]

const humanYearsCatYearsDogYears = (y) => {
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24]
}