/**
 * 至少是其他数字的两倍
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const max = Math.max(...nums)

  let index = -1
  for (let i = 0; i < nums.length; i++) {
    const curry = nums[i]
    if (curry === max) {
      index = i
      continue
    }

    if (curry * 2 > max) {
      return -1
    }
  }

  return index
};

console.log(dominantIndex([3, 6, 1, 0]));