/**
 * 比较版本号
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split('.')
  const v2 = version2.split('.')

  const max = Math.max(v1.length, v2.length)

  let i = 0
  while (i <= max) {
    let x = +v1[i] || 0
    let y = +v2[i] || 0

    if (x > y) {
      return 1
    } else if (x < y) {
      return -1
    }
    i++
  }

  return 0
};