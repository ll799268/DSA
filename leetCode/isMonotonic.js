/**
 * 单调数列
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  const isInc = nums[0] <= nums[nums.length - 1]

  for (let i = 1; i < nums.length; i++) {
    if (isInc) {
      if (nums[i] - nums[i - 1] < 0) return false
    } else {
      if (nums[i] - nums[i - 1] > 0) return false
    }
  }

  return true
};

console.log(isMonotonic([1, 2, 2, 3]));