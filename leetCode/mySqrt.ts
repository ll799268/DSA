/** 
 * x 的平方根
 */
function mySqrt(x: number): number {
  let i: number = 1
  while (true) {
    if (i * i > x) return i - 1
    i++
  }
}

function mySqrt1(x: number): number {
  return Math.floor(Math.sqrt(x))
}