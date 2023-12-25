/**
 * 3的幂
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 1) return true

  while (n >= 1) {
    if (n / 3 === 1) return true
    n /= 3
  }

  return false
};