/**
 * 使用最小花费爬楼梯
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length

  let pre = 0,
    cur = 0

  for (let i = 2; i <= n; i++) {
    const temp = Math.min(cur + cost[i - 1], pre + cost[i - 2])
    pre = cur
    cur = temp 
  }

  return cur
};