/**
 * 最大子数组和
 */

// 贪心
function maxSubArray(nums: number[]): number {
  let max: number = nums[0],
    cur: number = nums[0]

  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i])
    max = Math.max(max, cur)
  }

  return max
};

// 动态规划
function maxSubArray1(nums: number[]): number {
  const leg = nums.length
  if (leg === 0) return 0

  const dp: number[] = []
  dp[0] = nums[0]
  let result: number = nums[0]

  for (let i = 1; i < leg; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
    result = Math.max(result, dp[i])
  }

  return result
};