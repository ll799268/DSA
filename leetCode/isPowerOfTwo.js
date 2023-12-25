/**
 * 是否是2的幂
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1) return true
  if (n <= 0) return false
  return isPowerOfTwo(n / 2)
};

var isPowerOfTwo = function (n) {
  if (n === 1) return true

  while (n >= 1) {
    if (n / 2 === 1) return true
    n /= 2
  }

  return false
};