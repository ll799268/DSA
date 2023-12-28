/**
 * 目标和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0

  const dfs = (index, sum) => {
    if (index === nums.length) {
      if (sum === target) {
        count++
      }
      return
    }
    dfs(index + 1, sum + nums[index])
    dfs(index + 1, sum - nums[index])
  }

  dfs(0, 0)
  return count
};