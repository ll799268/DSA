/**
 * 重复的子字符串
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let num = s.length / 2

  while (num >= 1) {
    const str = s.slice(0, num)
    const code = s
    if (!code.replaceAll(str, '').length) return true
    num--
  }

  return false
};

console.log(repeatedSubstringPattern('abab'));