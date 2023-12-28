/**
 * 判定字符是否唯一
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  const map = {}

  for (const k of astr) {
    if (k in map) return false
    map[k] = ''
  }

  return true
};