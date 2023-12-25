/**
 * 判断一个数字是否可以表示成三的幂的和
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  while (n !== 0) {
    if (n % 3 === 2) return false
    n = Math.floor(n / 3)
  }
  return true
};

var checkPowersOfThree = function (n) {
  return !n.toString(3).includes('2')
};

console.log(checkPowersOfThree(21));