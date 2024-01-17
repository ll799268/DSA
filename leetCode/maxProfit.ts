/** 
 * 买卖股票最佳时机
 */
function maxProfit(prices: number[]): number {
  let min: number = Math.max(...prices)
  let result: number = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
      continue
    }
    result = Math.max(prices[i] - min, result)
  }

  return result
};