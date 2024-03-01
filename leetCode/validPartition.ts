/**
 * 检查数组是否存在有效划分
 */
function validPartition(nums: number[]): boolean {
  const n: number = nums.length
  const dp = new Array(n + 1).fill(false)
  dp[0] = true

  const validTwo = (num1: number, num2: number): boolean => {
    return num1 === num2
  }
  const validThree = (num1: number, num2: number, num3: number): boolean => {
    return (num1 === num2 && num1 === num3) || (num1 + 1 === num2 && num2 + 1 === num3)
  }

  for (let i = 1; i <= n; i++) {
    if (i >= 2) {
      dp[i] = dp[i - 2] && validTwo(nums[i - 2], nums[i - 1])
    }

    if (i >= 3) {
      dp[i] = dp[i] || (dp[i - 3] && validThree(nums[i - 3], nums[i - 2], nums[i - 1]))
    }
  }

  return dp[n]

};