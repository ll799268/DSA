/**
 * 翻转图像
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map(item => {
    const codes = item.reverse()
    for (const i in codes) {
      codes[i] = codes[i] === 0 ? 1 : 0
    }
    return codes
  })
};

var flipAndInvertImage = function (image) {
  return image.map(item => item.reverse().map(c => c ^ 1))
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));