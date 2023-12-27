/**
 * 独一无二的出现次数
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  if (arr.length <= 1) return false

  const map = new Map()
  for (const k of arr) {
    const count = map.get(k)
    count ? map.set(k, count + 1) : map.set(k, 1)
  }

  const times = new Set()
  for (const [k, v] of map) {
    times.add(v)
  }

  return times.size === map.size
};


console.log(uniqueOccurrences([3, 5, -2, -3, -6, -6]));