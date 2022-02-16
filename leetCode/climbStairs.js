/** 爬楼梯
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢
 * 动态规划、斐波那契数列
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // dp[i] 为第 i 阶楼梯有多少种方法爬到楼顶
  // dp[i] = dp[i - 1] + dp[i - 2]
  let dp = [1, 2]
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n - 1]
}

climbStairs('5')
// console.log(climbStairs('5'))