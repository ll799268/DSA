/** 有效的括号
 * 栈(先进后出)
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [],
    map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }

  for (let i = 0; i < s.length; i++) {
    const curry = s[i]
    if (curry in map) {
      stack.push(curry)
      continue
    }
    if (map[stack.pop()] !== curry) return false
  }

  return !stack.length
}

console.log(isValid("{[]}"))