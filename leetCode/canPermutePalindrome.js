/**
 * 回文排列
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const map = new Map()

  for (let k of s) {
    if (!map.has(k)) {
      map.set(k, 1)
      continue
    }
    map.delete(k)
  }

  return map.size < 2
};

console.log(canPermutePalindrome('code'));