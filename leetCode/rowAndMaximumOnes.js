/**
 * 一最多的行
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let result = [0, 0]
  for (let i = 0; i < mat.length; i++) {
    const curry = mat[i]
    const count = curry.reduce((p, c) => p += c)
    if (count > result[1]) {
      result = [i, count]
    }
  }

  return result
};

console.log(rowAndMaximumOnes([[0, 1], [1, 0]]));