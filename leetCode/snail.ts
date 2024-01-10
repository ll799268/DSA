declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
  }
}

/**
 * 蜗牛排序
 */
Array.prototype.snail = function (rowsCount: number, colsCount: number): number[][] {
  if (rowsCount * colsCount !== this.length) return []

  let result: number[][] = new Array(rowsCount)
    .fill(0).map(() => new Array(colsCount).fill(0))

  for (let i = 0; i < colsCount; i++) {
    for (let j = 0; j < rowsCount; j++) {
      const cur = this[i * rowsCount + j]
      if (i % 2 === 1) {
        result[rowsCount - j - 1][i] = cur
      } else {
        result[j][i] = cur
      }
    }
  }

  return result
}

/**
* const arr = [1,2,3,4];
* arr.snail(1,4); // [[1,2,3,4]]
*/

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
arr.snail(5, 4);