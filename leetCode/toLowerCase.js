/**
 * 转换成小写字母
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  return s.toLocaleLowerCase()
};

var toLowerCase = function (s) {
  const sb = []
  for (let ch of s) {
    if (ch.charCodeAt() >= 65 && ch.charCodeAt(0) <= 90) {
      ch = String.fromCharCode(ch.charCodeAt() | 32)
    }
    sb.push(ch)
  }

  return sb.join('')
};