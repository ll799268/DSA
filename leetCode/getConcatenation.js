/**
 * 数组串联
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  return [...nums, ...nums]
};

var getConcatenation = function (nums) {
  const n = nums.length
  const result = []

  for (let i = 0; i < nums.length; i++) {
    result[i + n] = result[i] = nums[i]
  }

  return result
};