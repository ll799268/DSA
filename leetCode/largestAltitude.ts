/**
 * 找到最高海拔
 */
function largestAltitude(gain: number[]): number {
  let result: number = 0
  let cur: number = 0

  for (let g of gain) {
    cur += g
    result = Math.max(result, cur)
  }

  return result
};