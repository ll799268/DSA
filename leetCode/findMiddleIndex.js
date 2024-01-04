/**
 * 找到数组的中间位置
 * @param {number[]} nums
 * @return {number}
 */

// 左侧元素为sum，右侧为count - sum - nums[i]
// sum = count - sum - nums[i]
// -count = -2sum - nums[i]
// count = 2 * sum + num[i]
var findMiddleIndex = function (nums) {
  const count = nums.reduce((p, c) => p += c)
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    if (count === 2 * sum + nums[i]) {
      return i
    }
    sum += nums[i]
  }

  return -1
};

var findMiddleIndex = function (nums) {
  let right = nums.reduce((p, c) => p += c)
  let left = 0

  for (let i = 0; i < nums.length; i++) {
    right -= nums[i]
    if (left === right) return i
    left += nums[i]
  }

  return -1
};

console.log(findMiddleIndex([2, 5]));