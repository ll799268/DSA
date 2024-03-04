/**
 * 回文数字
 */
function isPalindromeNumber(x: number): boolean {
  if (x < 0) return false

  let code: string = String(x)

  for (let i = 0, j = code.length - 1; i < j; i++, j--) {
    if (code[i] !== code[j]) return false
  }

  return true
};