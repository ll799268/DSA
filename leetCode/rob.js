/**
 * 打家劫舍
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0

  const dp = new Array(nums.length).fill(0)
  dp[0] = 0
  dp[1] = nums[0]

  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1])
  }

  return dp[nums.length - 1]
};

var rob = function (nums) {
  let pre = 0
  let cur = 0

  let i = -1
  while (i++ < nums.length - 1) {
    let temp = Math.max(pre + nums[i], cur)
    pre = cur
    cur = temp
  }

  return cur
};

console.log(rob([1, 2, 3, 1]));