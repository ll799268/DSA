/**
 * 重新排列数组
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let after = n
  let result = []
  for (let before = 0; before < n; before++, after++) {
    result.push(nums[before])
    result.push(nums[after])
  }

  return result
};

var shuffle = function (nums, n) {
  let ans = []

  for (let i = 0; i < n; i++) {
    ans[2 * i] = nums[i]
    ans[2 * i + 1] = nums[n + i]
  }

  return ans
};