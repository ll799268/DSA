/**
 * 分割字符串的最大得分
 */
function maxScore(s: string): number {
  let result: number = 0
  for (let i = 1; i < s.length; i++) {
    const left: string = s.slice(0, i).replaceAll('1', '')
    const right: string = s.slice(i - s.length).replaceAll('0', '')
    result = Math.max(result, left.length + right.length)
  }

  return result
};

console.log(maxScore('011101'));
