/** 二进制求和
 * 给你两个二进制字符串，返回它们的和（用二进制表示）
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let str = ''
  let i = a.length - 1, j = b.length - 1
  let dight = 0, cary = 0, sum = 0
  while (i >= 0 || j >= 0) {
    sum = ~~a[i] + ~~b[j] + cary
    dight = sum % 2
    cary = (sum - dight) / 2
    str = dight + str
    i--
    j--
  }
  return cary ? cary + str : str
}

console.log(addBinary('1010', '1011'))

// 10101