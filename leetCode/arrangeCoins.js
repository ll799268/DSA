/**
 * 排列硬币
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let ans = 0
  while (n - ans > 0) {
    n -= ++ans
  }

  return ans
};

var arrangeCoins = function (n) {
  let left = 1,
    right = n

  while (left < right) {
    const mid = Math.floor((right - left + 1) / 2) + left
    if (mid * (mid + 1) <= 2 * n) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  return left
}

console.log(arrangeCoins(8));