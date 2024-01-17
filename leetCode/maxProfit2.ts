/**
 * 买卖股票的最佳时机II
 */
function maxProfit(prices: number[]): number {
  let result: number = 0

  for (let i = 1; i < prices.length; i++) {
    result += Math.max(0, prices[i] - prices[i - 1])
  }

  return result
};

function maxProfit1(prices: number[]): number {
  const dp = Array(prices.length)
    .fill(0)
    .map(() => Array(2).fill(0))

  dp[0][0] = -prices[0]
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
  }
  return dp[prices.length - 1][1]
};