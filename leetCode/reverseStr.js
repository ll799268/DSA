/**
 * 反转字符串II
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  for (let i = 0; i < s.length; i += 2 * k) {
    const temp = s.substring(i, i + k)
    const rTemp = temp.split('').reverse().join('')
    s = s.replace(temp, rTemp)
  }

  return s
};

var reverseStr = function (s, k) {
  const n = s.length
  const arr = s.split('')

  const reverse = (arr, left, right) => {
    while (left < right) {
      [arr[left++], arr[right--]] = [arr[right], arr[left]]
    }
  }

  for (let i = 0; i < n; i += 2 * k) {
    reverse(arr, i, Math.min(i + k, n) - 1)
  }

  return arr.join('')
};

console.log(reverseStr('abcdefg', 2))