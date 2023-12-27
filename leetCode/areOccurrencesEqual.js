/**
 * 检查是否所有字符出现次数相同
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const map = new Map()
  for (let ch of s) {
    map.set(ch, map.get(ch) ? map.get(ch) + 1 : 1)
  }
  return new Set(map.values()).size === 1
};