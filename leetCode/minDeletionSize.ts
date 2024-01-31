/**
 * 删列造序
 */
function minDeletionSize(strs: string[]): number {
  let result: number = 0

  const row: number = strs.length
  const col: number = strs[0].length

  for (let j = 0; j < col; j++) {
    for (let i = 1; i < row; i++) {
      if (strs[i - 1][j] > strs[i][j]) {
        result++
        break
      }
    }
  }

  return result
};