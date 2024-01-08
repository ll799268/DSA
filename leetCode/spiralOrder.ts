/**
 * 螺旋矩阵
 * @param matrix 
 * @returns 
 */
function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = []

  let m: number = matrix.length,
    n: number = matrix[0].length,
    count: number = m * n

  let i: number = 0,
    j: number = 0

  while (result.length < count) {
    // 向右
    while (j < n && matrix[i][j] !== 200) {
      result.push(matrix[i][j])
      matrix[i][j] = 200
      j++
    }
    j--
    i++

    // 向下
    while (i < m && matrix[i][j] !== 200) {
      result.push(matrix[i][j])
      matrix[i][j] = 200
      i++
    }
    i--
    j--

    // 向左
    while (j >= 0 && matrix[i][j] !== 200) {
      result.push(matrix[i][j])
      matrix[i][j] = 200
      j--
    }
    j++
    i--

    // 向右
    while (i >= 0 && matrix[i][j] !== 200) {
      result.push(matrix[i][j])
      matrix[i][j] = 200
      i--
    }
    j++
    i++

  }

  return result
};