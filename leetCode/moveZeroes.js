/**
 * 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      i--
      count++
    }
  }

  nums.push(...new Array(count).fill(0))
  return nums
};

var moveZeroes = function (nums) {
  let slowIndex = 0

  for (let fastIndex = 0; i < nums.length; fastIndex++) {
    if (nums[fastIndex] !== 0) {
      [nums[slowIndex], nums[fastIndex]] = [nums[fastIndex], nums[slowIndex]]
      slowIndex++
    }
  }
}

console.log(moveZeroes([0, 0, 1]));