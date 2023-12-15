/**
 * 斐波那契数
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0
  const result = [0, 1]

  for (let i = 2; i <= n; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % 1000000007
  }

  return result[result.length - 1]
}

var fib = function (n) {
  if (n === 0) return 0

  let prev = 0
  let next = 1

  for (let i = 2; i <= n; i++) {
    [prev, next] = [next, (prev + next) % 1000000007]
  }

  return next
}