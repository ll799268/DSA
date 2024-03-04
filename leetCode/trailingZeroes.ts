/**
 * 阶乘后的零
 */
function trailingZeroes(n: number): number {
  let result: number = 0

  while (n) {
    n = Math.floor(n / 5)
    result += n
  }

  return result
};
