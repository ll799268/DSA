/**
 * 找出中枢整数
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  if (n === 1) return 1

  let r1 = 0,
    r2 = 0

  let j = 1
  while (n - j) {
    for (let i = n; i >= n - j; i--) {
      r1 += i
    }

    for (let i = 0; i <= n - j; i++) {
      r2 += i
    }

    if (r1 === r2) {
      return n - j
    } else if (r2 > r1) {
      r2 = r1 = 0
      j++
    } else {
      return -1
    }
  }
};

var pivotInteger = function (n) {
  let t = (n * n + n) / 2
  let x = parseInt(Math.sqrt(t))

  if (x * x === t) {
    return x
  }

  return -1
}

console.log(pivotInteger(8));