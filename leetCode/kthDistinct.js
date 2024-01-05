/**
 * 数组中第 K 个独一无二的字符串
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = new Map()

  for (let c of arr) {
    if (map.get(c)) {
      map.set(c, map.get(c) + 1)
      continue
    }

    map.set(c, 1)
  }

  for (const [c] of map) {
    if (map.get(c) === 1) k--
    if (k === 0) return c
  }

  return ''
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));