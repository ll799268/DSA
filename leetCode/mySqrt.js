/** x 的平方根
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return Math.floor(Math.sqrt(x))
}

var mySqrt = function (x) {
  let i = 1
  while (true) {
    if (i * i > x) return i - 1
    i++
  }
}

console.log(mySqrt(8))