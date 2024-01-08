/**
 * 矩阵对角线元素的和
 * @param mat 
 * @returns 
 */
function diagonalSum(mat: number[][]): number {
  const n: number = mat.length,
    mid: number = Math.floor(n / 2)

  let sum: number = 0

  for (let i = 0; i < n; i++) {
    sum += mat[i][i] + mat[i][n - i - 1]
  }

  return sum - mat[mid][mid] * (n & 1)
};

function diagonalSum1(mat: number[][]): number {
  const n: number = mat.length

  let sum: number = 0

  for (let i = 0; i < n; ++i) {
    sum += mat[i][i]
    const j = n - i - 1
    if (i !== j) {
      sum += mat[i][j]
    }
  }

  return sum
}

console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
