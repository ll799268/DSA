/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (size > arr.length) size = arr.length

  const result = []

  const num = Math.floor(arr.length / size)
  const last = arr.length % size

  let i = num

  while (i) {
    result.push(arr.slice((num - i--) * size, (num - i) * size))
  }

  last && result.push(arr.slice(num * size, arr.length))

  return result
};