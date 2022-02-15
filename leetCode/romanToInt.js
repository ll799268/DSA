/** 罗马数字转整数
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M
 * 字符          数值
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    a: 4,
    b: 9,
    c: 40,
    d: 90,
    e: 400,
    f: 900
  }
  s = s.replace('IV', 'a')
  s = s.replace('IX', 'b')
  s = s.replace('XL', 'c')
  s = s.replace('XC', 'd')
  s = s.replace('CD', 'e')
  s = s.replace('CM', 'f')
  return s.split('').reduce((acc, cur) => acc + map[cur], 0)
}

console.log(romanToInt('MCMXCIV'))