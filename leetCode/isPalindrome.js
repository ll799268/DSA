/**
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

console.log(isPalindrome(121))