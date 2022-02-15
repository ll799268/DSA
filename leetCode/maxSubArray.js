/** 最大子数组和
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和
 * 分治法
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = nums => {
  // 数组长度，dp初始化
  const [len, dp] = [nums.length, [nums[0]]]
  // 最大值初始化为dp[0]
  let max = dp[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    // 更新最大值
    max = Math.max(max, dp[i])
  }
  return max
}

// 贪心算法
var maxSubArray = nums => {
  let currySum = nums[0],
    maxSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const curry = nums[i]
    currySum = Math.max(curry, currySum + curry)
    maxSum = Math.max(maxSum, currySum)
  }

  return maxSum
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
