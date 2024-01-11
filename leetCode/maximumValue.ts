/**
 * 数组中字符串的最大值
 * @param strs 
 * @returns 
 */
function maximumValue(strs: string[]): number {
  let max: number = 0
  for (let i = 0; i < strs.length; i++) {
    const code: number = /^\d+$/.test(strs[i]) ? parseInt(strs[i]) : strs[i].length
    max = Math.max(code, max)
  }

  return max
};
