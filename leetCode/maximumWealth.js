/**
 * 最富有客户的资产总量
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0

  for (let account of accounts) {
    max = Math.max(max, account.reduce((c, p) => c + p))
  }

  return max
};

var maximumWealth = function (accounts) {
  return Math.max(max, accounts.map(item => item.reduce((c, p) => c + p)))
};