/**
 * 寻找峰值II
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  let left = 0,
    right = mat.length - 2

  const indexOfMax = (arr) => {
    let idx = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[idx]) {
        idx = i
      }
    }
    return idx
  }

  while (left <= right) {
    const i = Math.floor((left + right) / 2)
    const j = indexOfMax(mat[i])

    if (mat[i][j] > mat[i + 1][j]) {
      right = i - 1
    } else {
      left = i + 1
    }

  }
  return [left, indexOfMax(mat[left])]
};