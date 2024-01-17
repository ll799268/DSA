/**
 * 摆动序列
 */

// 贪心
function wiggleMaxLength(nums: number[]): number {
  let preDiff: number = 0
  let curDiff: number = 0

  let result: number = 1
  for (let i = 1; i < nums.length; i++) {
    curDiff = nums[i] - nums[i - 1]
    if ((preDiff <= 0 && curDiff > 0) ||
      (preDiff >= 0 && curDiff < 0)) {
      result++
      preDiff = curDiff
    }
  }

  return result
};

// 动态规划
function wiggleMaxLength1(nums: number[]): number {
  const leg: number = nums.length
  if (leg <= 1) return leg

  const dp: number[][] = new Array(length).fill(0).map(() => [])
  dp[0][0] = 1 // 第一个数作为波峰
  dp[0][1] = 1 // 第一个数作为波谷

  for (let i = 1; i < leg; i++) {
    dp[i][0] = 1
    dp[i][1] = 1

    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1)
    }
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1)
    }
  }

  return Math.max(dp[length - 1][0], dp[length - 1][1])
}