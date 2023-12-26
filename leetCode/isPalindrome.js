/** 回文字符串
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = String(x)
  const leg = x.length

  if (x < 0) return false
  if (x === 0) return true

  let result = true
  for (let i = 0; i < Math.floor(leg / 2); i++) {
    if (x[i] !== x[leg - i - 1]) {
      result = false
    }
  }

  return result
}

var isPalindrome = function (x) {
  return String(x) === String(x).split('').reverse().join('')
}

var isPalindrome = function (x) {
  if (s === '') return true
  const code = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  for (let i = 0, j = code.length - 1; i < j; i++, j--) {
    if (code[i] !== code[j]) return false
  }

  return true
}

console.log(isPalindrome(121))