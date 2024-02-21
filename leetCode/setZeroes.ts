/**
 * 矩阵置零
 * Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let m: number = matrix.length
  let n: number = matrix[0].length

  let rows: boolean[] = new Array(m).fill(false)
  let cols: boolean[] = new Array(n).fill(false)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = cols[j] = true
      }
    }
  }


  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0
      }
    }
  }

};
