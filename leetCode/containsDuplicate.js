/**
 * 存在重复元素
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const curry = nums[i]
    if (curry in map) return true
    map[curry]++
  }
  return false
};