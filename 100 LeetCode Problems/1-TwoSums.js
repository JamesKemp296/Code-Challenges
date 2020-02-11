// Given an array of integers, return indices of the two
// numbers such that they add up to a specific target.

// You may assume that each input would have exactly one
// solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
  let myArr = []
  for (i = 0; i < nums.length; i++) {
    for (i2 = i + 1; i2 < nums.length; i2++) {
      if (nums[i] + nums[i2] === target) myArr.push(i, i2)
    }
  }
  return myArr
}
