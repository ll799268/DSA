/**
 * 多数元素
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  for (let [key, value] of map) {
    if (value > nums.length / 2) {
      return key
    }
  }
};

var majorityElement = function (nums) {
  nums = nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
}