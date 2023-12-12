/** 
 * 买卖股票最佳时机
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Math.max(...prices)
  let result = 0
  
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else if (prices[i] - min > result) {
      result = prices[i] - min
    }
  }

  return result
};