/**
 * 找出峰值
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
  let result = []

  for (let i = 1; i < mountain.length; i++) {
    const p = mountain[i - 1]
    const c = mountain[i]
    const n = mountain[i + 1]

    if (c > p && c > n) {
      result.push(i)
    }
  }

  return result
};