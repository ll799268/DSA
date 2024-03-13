/**
 * 最大二进制奇数
 */
function maximumOddBinaryNumber(s: string): string {
  let count: number = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      count++
    }
  }

  return '1'.repeat(count) + '0'.repeat(s.length - count) + '1'
};