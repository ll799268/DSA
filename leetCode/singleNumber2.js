/**
 * 只出现一次的数字II
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map()
  for (const k of nums) {
    const count = map.get(k)
    count ? map.set(k, count + 1) : map.set(k, 1)
  }

  for (const [k, v] of map) {
    if (v === 1) return k
  }
};