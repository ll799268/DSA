/**
 * 是否是2的幂
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 1) return true
  if (n <= 0) return false
  return isPowerOfTwo(n / 2)
};