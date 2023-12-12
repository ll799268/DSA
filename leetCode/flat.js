/**
 * 扁平化数组
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n === 0) return arr
  const result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(...(Array.isArray(arr[i]) ? flat(arr[i], n - 1) : [arr[i]]));
  }
  return result
};