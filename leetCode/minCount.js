/**
 * 拿硬币
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  let result = 0

  for (let i = 0; i < coins.length; i++) {
    const curry = coins[i]
    result += Math.ceil(curry / 2)
  }

  return result
};