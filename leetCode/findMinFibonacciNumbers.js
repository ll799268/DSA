/**
 * 和为k的最少斐波那契数字数目
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  const f = [1]
  let a = 1, b = 1
  while (a + b <= k) {
    const c = a + b
    f.push(c)
    a = b
    b = c
  }

  let ans = 0
  for (let i = f.length - 1; i >= 0 && k > 0; i--) {
    const num = f[i]

    if (k >= num) {
      k -= num
      ans++
    }
  }

  return ans
};

var findMinFibonacciNumbers = function (k) {
  if (k === 0) return 0
  if (k === 1) return 1

  let a = 1, b = 1

  while (b <= k) {
    b = a + b
    a = b - a
  }

  return findMinFibonacciNumbers(k - a) + 1
}
