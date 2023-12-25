/**
 * 4的幂
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  while (n >= 1) {
    if (n / 4 === 1) return true
    n /= 4
  }

  return false
};