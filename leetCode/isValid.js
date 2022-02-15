/** 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合、左括号必须以正确的顺序闭合
 * 
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
    // 判断map对象中是否有curry该键值
    if (curry in map) {
      stack.push(curry)
      continue
    }
    if (map[stack.pop()] !== curry) return false
  }

  return !stack.length
}

console.log(isValid("{[]}"))