/**
 * 螺旋矩阵II
 */
function generateMatrix(n: number): number[][] {
  const result: number[][] = new Array(n).fill('').map(() => new Array(n).fill(''))
  let i: number = 0,
    j: number = 0,
    startX: number = 0,
    startY: number = 0,
    loopNum: number = Math.floor(n / 2),
    count: number = 1,
    splitNum: number = n - 1

  while (loopNum--) {
    i = startX
    j = startY
    while (i < startX + splitNum) {
      result[j][i] = count++
      i++
    }

    while (j < startY + splitNum) {
      result[j][i] = count++
      j++
    }

    while (i > startX) {
      result[j][i] = count++
      i--
    }

    while (j > startY) {
      result[j][i] = count++
      j--
    }

    startX++
    startY++
    splitNum -= 2
  }

  if (n % 2 === 1) {
    result[startX][startY] = count
  }

  return result
};

console.log(generateMatrix(3));
