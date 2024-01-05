/**
 * 重新排列字符串
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const arr = []

  for (let i = 0; i < s.length; i++) {
    const idx = indices[i]
    arr[idx] = s[i]
  }

  return arr.join('')
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));